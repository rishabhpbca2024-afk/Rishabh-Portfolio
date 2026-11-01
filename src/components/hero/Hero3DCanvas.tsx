import React, { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
}

export const Hero3DCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
      targetRotY = mouseX * 0.8;
      targetRotX = -mouseY * 0.8;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate 3D Sphere Points
    const numPoints = 85;
    const radius = Math.min(width, height) * 0.38;
    const points: Point3D[] = [];

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      points.push({ x, y, z, baseX: x, baseY: y, baseZ: z });
    }

    let angleY = 0;
    let angleX = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation with mouse influence
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      angleY += 0.005;
      angleX += 0.002;

      const totalRotY = angleY + currentRotY;
      const totalRotX = angleX + currentRotX;

      const cosY = Math.cos(totalRotY);
      const sinY = Math.sin(totalRotY);
      const cosX = Math.cos(totalRotX);
      const sinX = Math.sin(totalRotX);

      const fov = 340;
      const projectedPoints: { x: number; y: number; scale: number; alpha: number }[] = [];

      // Rotate and Project 3D to 2D
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        const x1 = p.baseX * cosY - p.baseZ * sinY;
        const z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotate X
        const y2 = p.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.baseY * sinX;

        // Perspective Projection
        const scale = fov / (fov + z2 + radius);
        const projX = x1 * scale + width / 2;
        const projY = y2 * scale + height / 2;
        const alpha = Math.max(0.15, Math.min(0.9, (z2 + radius) / (radius * 2)));

        projectedPoints.push({ x: projX, y: projY, scale, alpha });
      }

      // Draw Connections between close nodes
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const dx = projectedPoints[i].x - projectedPoints[j].x;
          const dy = projectedPoints[i].y - projectedPoints[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 65) {
            const lineAlpha = (1 - dist / 65) * 0.22 * projectedPoints[i].alpha;
            ctx.strokeStyle = `rgba(34, 211, 238, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projectedPoints[i].x, projectedPoints[i].y);
            ctx.lineTo(projectedPoints[j].x, projectedPoints[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw 3D Nodes
      for (let i = 0; i < projectedPoints.length; i++) {
        const pt = projectedPoints[i];
        const dotRadius = Math.max(1.2, 2.8 * pt.scale);

        // Core dot
        ctx.fillStyle = `rgba(56, 189, 248, ${pt.alpha})`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();

        // Glow on top nodes
        if (pt.alpha > 0.65) {
          ctx.fillStyle = `rgba(34, 211, 238, ${pt.alpha * 0.25})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, dotRadius * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
      />
    </div>
  );
};

