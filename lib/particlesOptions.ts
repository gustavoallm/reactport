import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";

export const particlesOptions: ISourceOptions = {
  fullScreen: false,
  background: {
    color: "transparent",
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: MoveDirection.none,
      outModes: {
        default: OutMode.out,
      },
    },
    number: {
      value: 80,
      density: {
        enable: true,
      },
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
    },
  },
  detectRetina: true,
};
