import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = ({ variant = 'default' }) => {
  // Generate random positions and delays for shapes
  const generateShapes = (count, type) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      type,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 120 + Math.random() * 250,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 20,
      opacity: 0.15 + Math.random() * 0.20, // Increased visibility
    }));
  };

  // Circle component
  const AnimatedCircle = ({ shape }) => (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${shape.x}%`,
        top: `${shape.y}%`,
        width: `${shape.size}px`,
        height: `${shape.size}px`,
        background: `radial-gradient(circle, rgba(20, 184, 166, ${shape.opacity}), rgba(249, 115, 22, ${shape.opacity * 0.7}))`,
        filter: 'blur(25px)',
        willChange: 'transform, opacity',
      }}
      animate={{
        x: [0, 50, -30, 0],
        y: [0, -40, 30, 0],
        scale: [1, 1.2, 0.9, 1],
        opacity: [shape.opacity, shape.opacity * 1.5, shape.opacity * 0.8, shape.opacity],
      }}
      transition={{
        duration: shape.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: shape.delay,
      }}
    />
  );

  // Triangle component
  const AnimatedTriangle = ({ shape }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${shape.x}%`,
        top: `${shape.y}%`,
        width: 0,
        height: 0,
        borderLeft: `${shape.size / 2}px solid transparent`,
        borderRight: `${shape.size / 2}px solid transparent`,
        borderBottom: `${shape.size}px solid rgba(20, 184, 166, ${shape.opacity})`,
        filter: 'blur(20px)',
        willChange: 'transform, opacity',
      }}
      animate={{
        x: [0, 40, -20, 0],
        y: [0, -30, 25, 0],
        rotate: [0, 120, 240, 360],
        scale: [1, 1.3, 0.8, 1],
        opacity: [shape.opacity, shape.opacity * 1.4, shape.opacity * 0.7, shape.opacity],
      }}
      transition={{
        duration: shape.duration * 1.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: shape.delay,
      }}
    />
  );

  // Hexagon component
  const AnimatedHexagon = ({ shape }) => {
    const size = shape.size;
    const points = `
      ${size / 2},0
      ${size},${size * 0.25}
      ${size},${size * 0.75}
      ${size / 2},${size}
      0,${size * 0.75}
      0,${size * 0.25}
    `;
    
    return (
      <motion.svg
        className="absolute"
        style={{
          left: `${shape.x}%`,
          top: `${shape.y}%`,
          width: `${size}px`,
          height: `${size}px`,
          filter: 'blur(22px)',
          opacity: shape.opacity,
          willChange: 'transform, opacity',
        }}
        viewBox={`0 0 ${size} ${size}`}
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 35, -25, 0],
          rotate: [0, 60, 120, 180, 240, 300, 360],
          scale: [1, 1.25, 0.85, 1],
        }}
        transition={{
          duration: shape.duration * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: shape.delay,
        }}
      >
        <polygon
          points={points}
          fill={`rgba(249, 115, 22, ${shape.opacity})`}
        />
      </motion.svg>
    );
  };

  // Blob component (organic shape)
  const AnimatedBlob = ({ shape }) => (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${shape.x}%`,
        top: `${shape.y}%`,
        width: `${shape.size}px`,
        height: `${shape.size * 0.8}px`,
        background: `linear-gradient(135deg, rgba(20, 184, 166, ${shape.opacity}), rgba(249, 115, 22, ${shape.opacity * 0.8}))`,
        filter: 'blur(30px)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        willChange: 'transform, opacity, border-radius',
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -25, 20, 0],
        scale: [1, 1.4, 0.9, 1],
        borderRadius: [
          '30% 70% 70% 30% / 30% 30% 70% 70%',
          '70% 30% 30% 70% / 70% 70% 30% 30%',
          '50% 50% 50% 50% / 50% 50% 50% 50%',
          '30% 70% 70% 30% / 30% 30% 70% 70%',
        ],
        opacity: [shape.opacity, shape.opacity * 1.6, shape.opacity * 0.9, shape.opacity],
      }}
      transition={{
        duration: shape.duration * 1.3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: shape.delay,
      }}
    />
  );

  // Abstract polygon component
  const AnimatedPolygon = ({ shape }) => {
    const size = shape.size;
    const sides = 8;
    const points = Array.from({ length: sides }, (_, i) => {
      const angle = (i * 2 * Math.PI) / sides;
      const radius = size / 2;
      const x = radius + radius * Math.cos(angle);
      const y = radius + radius * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');

    return (
      <motion.svg
        className="absolute"
        style={{
          left: `${shape.x}%`,
          top: `${shape.y}%`,
          width: `${size}px`,
          height: `${size}px`,
          filter: 'blur(20px)',
          opacity: shape.opacity,
          willChange: 'transform, opacity',
        }}
        viewBox={`0 0 ${size} ${size}`}
        animate={{
          x: [0, 45, -30, 0],
          y: [0, -35, 28, 0],
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: shape.duration * 1.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: shape.delay,
        }}
      >
        <polygon
          points={points}
          fill={`rgba(20, 184, 166, ${shape.opacity})`}
        />
      </motion.svg>
    );
  };

  if (variant === 'hero') {
    const circles = generateShapes(8, 'circle');
    const blobs = generateShapes(5, 'blob');
    const hexagons = generateShapes(4, 'hexagon');

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {circles.map((shape) => (
          <AnimatedCircle key={`circle-${shape.id}`} shape={shape} />
        ))}
        {blobs.map((shape) => (
          <AnimatedBlob key={`blob-${shape.id}`} shape={shape} />
        ))}
        {hexagons.map((shape) => (
          <AnimatedHexagon key={`hexagon-${shape.id}`} shape={shape} />
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    const circles = generateShapes(6, 'circle');
    const triangles = generateShapes(4, 'triangle');
    const polygons = generateShapes(3, 'polygon');

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0, opacity: 0.7 }}>
        {circles.map((shape) => (
          <AnimatedCircle key={`circle-${shape.id}`} shape={shape} />
        ))}
        {triangles.map((shape) => (
          <AnimatedTriangle key={`triangle-${shape.id}`} shape={shape} />
        ))}
        {polygons.map((shape) => (
          <AnimatedPolygon key={`polygon-${shape.id}`} shape={shape} />
        ))}
      </div>
    );
  }

  // Default variant
  const circles = generateShapes(5, 'circle');
  const triangles = generateShapes(3, 'triangle');
  const hexagons = generateShapes(2, 'hexagon');
  const blobs = generateShapes(3, 'blob');

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {circles.map((shape) => (
        <AnimatedCircle key={`circle-${shape.id}`} shape={shape} />
      ))}
      {triangles.map((shape) => (
        <AnimatedTriangle key={`triangle-${shape.id}`} shape={shape} />
      ))}
      {hexagons.map((shape) => (
        <AnimatedHexagon key={`hexagon-${shape.id}`} shape={shape} />
      ))}
      {blobs.map((shape) => (
        <AnimatedBlob key={`blob-${shape.id}`} shape={shape} />
      ))}
    </div>
  );
};

export default BackgroundEffects;
