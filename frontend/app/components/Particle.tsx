import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        []
    );

    // return (
    //     <div>
    //         <Particles
    //             id="tsparticles"
    //             init={particlesInit}
    //             loaded={particlesLoaded}
    //             options={{
    //                 fullScreen: {
    //                     enable: false,
    //                     zIndex: -5
    //                 },
    //                 fpsLimit: 120,
    //                 interactivity: {
    //                     detectsOn: "window",
    //                     events: {
    //                         onClick: {
    //                             enable: true,
    //                             mode: "repulse",
    //                         },
    //                         onHover: {
    //                             enable: true,
    //                             mode: "connect",
    //                             parallax: {
    //                                 enable: false,
    //                                 force: 2,
    //                                 smooth: 10
    //                             },
    //                         },
    //                         resize: {
    //                             delay: 0.5,
    //                             enable: true
    //                         }
    //                     },
    //                     modes: {
    //                         trail: {
    //                             delay: 1,
    //                             pauseOnStop: false,
    //                             quantity: 1
    //                         },
    //                         attract: {
    //                             distance: 200,
    //                             duration: 0.4,
    //                             easing: "ease-out-quad",
    //                             factor: 1,
    //                             maxSpeed: 50,
    //                             speed: 1
    //                         },
    //                         bounce: {
    //                             distance: 200
    //                         },
    //                         bubble: {
    //                             distance: 250,
    //                             duration: 2,
    //                             mix: false,
    //                             opacity: 0,
    //                             size: 0,
    //                             divs: {
    //                                 distance: 200,
    //                                 duration: 0.4,
    //                                 mix: false,
    //                                 selectors: []
    //                             }
    //                         },
    //                         connect: {
    //                             distance: 80,
    //                             links: {
    //                                 opacity: 0.5
    //                             },
    //                             radius: 60
    //                         },
    //                         grab: {
    //                             distance: 400,
    //                             links: {
    //                                 blink: false,
    //                                 consent: false,
    //                                 opacity: 1
    //                             }
    //                         },
    //                         push: {
    //                             default: true,
    //                             groups: [],
    //                             quantity: 4
    //                         },
    //                         remove: {
    //                             quantity: 2
    //                         },
    //                         repulse: {
    //                             distance: 400,
    //                             duration: 0.4,
    //                             factor: 100,
    //                             speed: 1,
    //                             maxSpeed: 50,
    //                             easing: "ease-out-quad",
    //                             divs: {
    //                                 distance: 200,
    //                                 duration: 0.4,
    //                                 factor: 100,
    //                                 speed: 1,
    //                                 maxSpeed: 50,
    //                                 easing: "ease-out-quad",
    //                                 selectors: []
    //                             }
    //                         },
    //                         slow: {
    //                             factor: 3,
    //                             radius: 200
    //                         },
    //                         particle: {
    //                             replaceCursor: false,
    //                             pauseOnStop: false,
    //                             stopDelay: 0,
    //                         },
    //                         light: {
    //                             area: {
    //                                 gradient: {
    //                                     start: {
    //                                         value: "#ffffff"
    //                                     },
    //                                     stop: {
    //                                         value: "#000000"
    //                                     },
    //                                     radius: 1000,
    //                                 }
    //                             },
    //                             shadow: {
    //                                 color: {
    //                                     value: "#000000"
    //                                 },
    //                                 length: 2000,
    //                             }
    //                         }
    //                     },
    //                 },
    //                 particles: {
    //                     color: {
    //                         value: "#000000",
    //                     },
    //                     links: {
    //                         color: "#777777",
    //                         distance: 150,
    //                         enable: true,
    //                         opacity: 0.5,
    //                         width: 1,
    //                     },
    //                     move: {
    //                         direction: "none",
    //                         enable: true,
    //                         speed: {
    //                             min: 0.1,
    //                             max: 1
    //                         },
    //                         straight: false,
    //                     },
    //                     number: {
    //                         density: {
    //                             enable: true,
    //                             width: 1920,
    //                             height: 1080
    //                         },
    //                         value: 300,
    //                     },
    //                     opacity: {
    //                         value: {
    //                             min: 0.1,
    //                             max: 1,
    //                         },
    //                         random: true,
    //                         anim: {
    //                             enable: true,
    //                             speed: 1,
    //                             decay: 0,
    //                             delay: 0,
    //                             sync: false,
    //                             mode: "auto",
    //                             startValue: "random",
    //                             destroy: "none",
    //                         }
    //                     },
    //                     shape: {
    //                         close: true,
    //                         fill: true,
    //                         type: [
    //                             "circle"
    //                         ],
    //                         options: {}
    //                     },
    //                     size: {
    //                         value: { min: 1, max: 3 },
    //                         random: true,
    //                         anim: {
    //                             enable: true,
    //                             speed: 5,
    //                             size_min: 0,
    //                             sync: false
    //                         }
    //                     },
    //                     rotate: {
    //                         value: 0,
    //                         direction: "clockwise",
    //                         move: true,
    //                         animation: {
    //                             enable: false,
    //                             speed: 0
    //                         }
    //                     },
    //                 },
    //                 detectRetina: true,
    //             }
    //             }
    //         />
    //     </div>
    // );

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: false,
                        zIndex: -5
                    },
                    // background: {
                    //     color: {
                    //         value: "#0d47a1",
                    //     },
                    // },
                    fpsLimit: 120,
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "repulse",
                            },
                            onHover: {
                                enable: true,
                                mode: "attract",
                                parallax: {
                                    enable: true,
                                    force: 50,
                                    smooth: 10
                                },
                            },
                            resize: {
                                delay: 0.5,
                                enable: true
                            }
                        },
                        modes: {
                            trail: {
                                delay: 1,
                                pauseOnStop: false,
                                quantity: 1
                            },
                            attract: {
                                distance: 200,
                                duration: 0.4,
                                easing: "ease-out-quad",
                                factor: 1,
                                maxSpeed: 50,
                                speed: 1
                            },
                            bounce: {
                                distance: 200
                            },
                            bubble: {
                                distance: 250,
                                duration: 2,
                                mix: false,
                                opacity: 0,
                                size: 0,
                                divs: {
                                    distance: 200,
                                    duration: 0.4,
                                    mix: false,
                                    selectors: []
                                }
                            },
                            connect: {
                                distance: 80,
                                links: {
                                    opacity: 0.5
                                },
                                radius: 60
                            },
                            grab: {
                                distance: 400,
                                links: {
                                    blink: false,
                                    consent: false,
                                    opacity: 1
                                }
                            },
                            push: {
                                default: true,
                                groups: [],
                                quantity: 4
                            },
                            remove: {
                                quantity: 2
                            },
                            repulse: {
                                distance: 400,
                                duration: 0.4,
                                factor: 100,
                                speed: 1,
                                maxSpeed: 50,
                                easing: "ease-out-quad",
                                divs: {
                                    distance: 200,
                                    duration: 0.4,
                                    factor: 100,
                                    speed: 1,
                                    maxSpeed: 50,
                                    easing: "ease-out-quad",
                                    selectors: []
                                }
                            },
                            slow: {
                                factor: 3,
                                radius: 200
                            },
                            particle: {
                                replaceCursor: false,
                                pauseOnStop: false,
                                stopDelay: 0,
                            }
                        },
                    },
                    particles: {
                        color: {
                            // value: [
                            //     "#daa520",
                            //     "#da2055"
                            // ]
                            value: [
                                "#eab308",
                                "#da2055"
                            ]
                        },
                        links: {
                            color: "#ffffff",
                            distance: 120,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            // direction: "top",
                            enable: true,
                            outModes: {
                                default: "out",
                            },
                            random: false,
                            speed: {
                                min: 0.1,
                                max: 5
                            },
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                width: 1920,
                                height: 1080
                            },
                            value: 300,
                        },
                        opacity: {
                            value: 0.7,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        shape: {
                            type: [
                                "square",
                                "circle"
                            ],
                            options: {}
                        },
                        size: {
                            // value: { min: 1, max: 3 },
                            value: 3,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 5,
                                size_min: 0,
                                sync: false
                            }
                        },
                        rotate: {
                            value: {
                                min: 0,
                                max: 360
                            },
                            direction: "random",
                            move: true,
                            animation: {
                                enable: true,
                                speed: 60
                            }
                        },
                    },
                    detectRetina: true,
                }
                }
            />
        </div>
    );
};

export default Particle;
