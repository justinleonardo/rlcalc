var currPrice;
const prices = [
                [.08, 1.1, 2.6, .7, 2.6, .9, .8, 1, .5, .7, .7, 1.4, .6, 1.9, 16],                                          // Roulette
                [.08, .9, 1.7, .7, 2.2, .4, .8, 1, .4, .8, .6, 1.3, .6, 1.4, 14],                                           // Kalos
                [.07, 2.4, 4.8, .5, .6, .4, .8, .9, .3, .5, .7, .7, .4, .9, 15],                                            // Zomba
                [.04, .3, .4, .1, .5, .2, .3, .2, .1, .3, .3, .4, .2, .4, 12],                                              // ARA-51
                [.04, null, .5, null, .5, .4, .5, .5, null, .3, .4, .5, .3, .5, 5],                                         // Discotheque
                [.03, .2, .3, .2, .6, .4, .2, .2, .2, .3, .3, .5, .4, .5, 8],                                               // Pulsus
                [.06, null, .7, .3, 3.4, .6, null, .3, .3, .7, .8, 1.4, .6, 1.6, 13],                                       // Voltaic
                [.03, .12, .12, .07, null, .08, .12, .1, .07, .08, .08, .1, .1, .1, 1.2],                                   // Lobo
                [.04, .2, .6, null, 1.2, .3, .3, .5, .2, .5, .6, .7, .5, 1, 7],                                             // Looper
                [.02, .2, .2, .1, .3, .2, .2, .2, .2, .2, .2, .3, .3, .2, 3],                                               // Photon
                [.09, .2, .3, .17, .3, .2, .3, .2, .2, .2, .2, .3, .2, .3, 4],                                              // Septem
                [.06, .3, .4, .2, null, .2, .2, .3, .1, .3, .3, .4, .2, .4, 3.5],                                           // FSL
                [.03, .2, .3, .2, .4, .2, .3, .2, .1, .2, .2, .2, .2, .3, 3],                                               // Spirallis
                [.01, null, .05, .05, .06, .07, .04, .04, .04, .04, .04, .04, .04, .08, .6],                                // Troika
                [.04, .18, .15, .08, null, .13, .13, .13, .06, .09, .09, .1, .09, .11, 1.4],                                // Chakram
                [33, null, null, null, null, null, null, null, null, null, null, null, null, null, null],                   // Goldstone
                [0, .18, .13, .1, .18, .13, .13, .13, .09, .13, .13, .13, .13, .13, 1.5],                                   // Dieci
                [0, .18, .13, .1, .18, .13, .13, .13, .09, .13, .13, .13, .13, .13, 1.5],                                   // Sunburst
                [0, .18, .13, .1, .18, .13, .13, .13, .09, .13, .13, .13, .13, .13, 1.5],                                   // Tunica
                [0, .18, .13, .1, .18, .13, .13, .13, .09, .13, .13, .13, .13, .13, 1.5],                                   // Vortex
                [0, .13, .1, .07, .13, .1, .1, .1, .07, .1, .1, .1, .1, .1, 1.3],                                           // Alchemist
                [0, .13, .1, .07, .13, .1, .1, .1, .07, .1, .1, .1, .1, .1, 1.3],                                           // Spyder
                [0, .13, .1, .07, .13, .1, .1, .1, .07, .1, .1, .1, .1, .1, 1.3],                                           // Invader
                [0, .13, .1, .07, .13, .1, .1, .1, .07, .1, .1, .1, .1, .1, 1.3],                                           // Stern
                [0, .08, .05, .07, .07, .07, .07, .07, .05, .07, .07, .07, .07, .07, .9],                                   // OEM
                [0, .08, .05, .07, .07, .07, .07, .07, .05, .07, .07, .07, .07, .07, .9],                                   // Octavian
                [0, .08, .05, .07, .07, .07, .07, .07, .05, .07, .07, .07, .07, .07, .9],                                   // Neptune
                [.005, .07, .03, .05, .06, .05, .05, .05, .03, .05, .05, .05, .05, .05, .6],                                // Asteria
                [0, .07, .03, .05, .06, .05, .05, .05, .03, .05, .05, .05, .05, .05, .6],                                   // Alma
                [0, .07, .03, .05, .06, .05, .05, .05, .03, .05, .05, .05, .05, .05, .6],                                   // Veloce
                [.005, .07, .03, .05, .06, .05, .05, .05, .03, .05, .05, .05, .05, .05, .6],                                // Zeta
                [0, .07, .03, .05, .06, .05, .05, .05, .03, .05, .05, .05, .05, .05, .6],                                   // Ratrods
                [0, .07, .03, .05, .06, .05, .05, .05, .03, .05, .05, .05, .05, .05, .6],                                   // Falco
                [0, .07, .03, .05, .06, .05, .05, .05, .03, .05, .05, .05, .05, .05, .6],                                   // Lowrider
                [0, .03, .03, .03, .03, .03, .03, .03, .03, .03, .03, .03, .03, .03, .4],                                   // Trahere
                [2.7], [1.2], [.8], [1], [.5], [.6], [.4], [.3],                                                            // Black Market Decals
                [(1 / 60)], [(1 / 60)], [(1 / 60)], [(1 / 45)], [(1 / 30)], [.05],                                          // Crates
                [.2, .4, 1.7, .4, 1.2, .5, .6, .7, .3, .4, .4, .8, .5, .8, 9],                                              // Endo
                [.07], [.05], [.05], [.03], [.03], [.03],                                                                   // Other imports
                [.07, .3, .5, .2, .5, .2, .2, .1, .3, .3, .4, .4, .3, .4, 4],                                               // Tachyon
                [.03], [.04], [.04], [.04], [.03], [.03], [.03],                                                            // Other boosts
                [.07]                                                                                                       // Furry
                ];

const links = [
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",        // Roulette
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/7/71/Roulette_wheel.png/revision/latest"], // Roulette
                ["https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",           // Kalos
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/f/f0/Kalos_wheel.png/revision/latest"],
                ["https://vignette4.wikia.nocookie.net/rocketleague/images/2/2a/Zomba_default.png/revision/latest",         // Zomba
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/e/ea/Zomba_black.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/2/20/Zomba_titanium_white.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/2/21/Zomba_grey.png/revision/latest",
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/d/d7/Zomba_crimson.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/0/03/Zomba_pink.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/2/2f/Zomba_cobalt.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/6/60/Zomba_sky_blue.png/revision/latest",
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/4/4c/Zomba_burnt_sienna.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/6/69/Zomba_saffron.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/1/19/Zomba_lime.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/b/b1/Zomba_forest_green.png/revision/latest",
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/a/ae/Zomba_orange.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/5/53/Zomba_purple.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/2/2a/Zomba_default.png/revision/latest"], // Zomba
                ["https://vignette1.wikia.nocookie.net/rocketleague/images/4/43/Ara51_default.png/revision/latest",         // ARA-51
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/b/b5/Ara51_black.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/4/4a/Ara51_titanium_white.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/4/4b/Ara51_grey.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/4/4b/Ara51_crimson.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/e/e7/Ara51_pink.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/a/aa/Ara51_cobalt.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/4/4d/Ara51_sky_blue.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/3/36/Ara51_burnt_sienna.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/d/df/Ara51_saffron.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/c/c1/Ara51_lime.png/revision/latest",
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/f/fa/Ara51_forest_green.png/revision/latest",
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/2/20/Ara51_orange.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/5/54/Ara51_purple.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/4/43/Ara51_default.png/revision/latest"],
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/8/82/Discotheque_default.png/revision/latest",   // Discotheque
                    null,
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/7/78/Discotheque_titanium_white.png/revision/latest",
                    null,
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/3/38/Discotheque_crimson.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/8/80/Discotheque_pink.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/3/32/Discotheque_cobalt.png/revision/latest",
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/9/97/Discotheque_sky_blue.png/revision/latest",
                    null,
                    "https://vignette4.wikia.nocookie.net/rocketleague/images/0/0d/Discotheque_saffron.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/1/11/Discotheque_lime.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/5/5c/Discotheque_forest_green.png/revision/latest",
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/7/7a/Discotheque_orange.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/d/d1/Discotheque_purple.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/8/82/Discotheque_default.png/revision/latest"],
                ["https://vignette1.wikia.nocookie.net/rocketleague/images/4/41/Pulsus_default.png/revision/latest",        // Pulsus
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/e/ed/Pulsus_black.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/4/4e/Pulsus_titanium_white.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/c/ce/Pulsus_grey.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/3/35/Pulsus_crimson.png/revision/latest",
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/5/50/Pulsus_pink.png/revision/latest",
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/5/55/Pulsus_cobalt.png/revision/latest",
                    "https://vignette2.wikia.nocookie.net/rocketleague/images/0/00/Pulsus_sky_blue.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/3/3b/Pulsus_burnt_sienna.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/d/db/Pulsus_saffron.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/6/61/Pulsus_lime.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/2/2d/Pulsus_forest_green.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/4/4d/Pulsus_orange.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/4/42/Pulsus_purple.png/revision/latest",
                    "https://vignette1.wikia.nocookie.net/rocketleague/images/4/41/Pulsus_default.png/revision/latest           "],
                ["https://vignette1.wikia.nocookie.net/rocketleague/images/d/d9/Voltaic_default.png/revision/latest"],
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/9/95/Lobo_default.png/revision/latest"],
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/d/d5/Looper_default.png/revision/latest"],
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/5/5a/Photon_default.png/revision/latest"],
                ["https://vignette4.wikia.nocookie.net/rocketleague/images/0/0c/Septem_wheel.png/revision/latest"],         
                ["https://vignette1.wikia.nocookie.net/rocketleague/images/d/dc/FSL_default.png/revision/latest"],
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/0/04/Spiralis_default.png/revision/latest"],
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/b/ba/Troika_default.png/revision/latest"],
                ["https://vignette4.wikia.nocookie.net/rocketleague/images/a/a9/Chakram_default.png/revision/latest"],
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/5/50/Goldstone_default.jpg/revision/latest"],
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/0/07/Dieci_default.png/revision/latest"], 
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/3/30/Sunburst_default.png/revision/latest"], 
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/c/c3/Tunica_default.png/revision/latest"], 
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/1/12/Vortex_default.png/revision/latest"], 
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/5/57/Alchemist_default.png/revision/latest"], 
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/6/6a/Spyder_default.png/revision/latest"], 
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/6/67/Invader_default.png/revision/latest"],      
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/a/a7/Stern_default.png/revision/latest"], 
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/d/d9/OEM_default.png/revision/latest"], 
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/b/b1/Octavian_default.png/revision/latest"], 
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/4/41/Neptune_default.png/revision/latest"],
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/8/87/Asterias_default.png/revision/latest"],
                ["https://vignette4.wikia.nocookie.net/rocketleague/images/1/15/Almas_default.png/revision/latest"], 
                ["https://vignette4.wikia.nocookie.net/rocketleague/images/9/93/Veloce_default.png/revision/latest"],
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/3/30/Zeta_default.png/revision/latest"],
                ["https://vignette4.wikia.nocookie.net/rocketleague/images/f/fd/Ratrod_default.png/revision/latest"], 
                ["https://vignette1.wikia.nocookie.net/rocketleague/images/3/3b/Falco_default.png/revision/latest"], 
                ["https://vignette4.wikia.nocookie.net/rocketleague/images/6/6f/Lowrider_default.png/revision/latest"],
                ["https://vignette4.wikia.nocookie.net/rocketleague/images/d/dd/Trahere_default.png/revision/latest"],      
                ["https://i.imgur.com/cnmS1Po.png"],                                                                        // 20xx
                ["https://i.imgur.com/jodGA0y.png"],                                                                        // Hexed
                ["https://i.imgur.com/E0DAuHB.png"],                                                                        // Tora
                ["https://i.imgur.com/0fQ6bmV.png"],                                                                        // Heatwave
                ["https://i.imgur.com/m6MBI9B.png"],                                                                        // Biomass
                ["https://i.imgur.com/nfFY0ig.png"],                                                                        // Parallax
                ["https://i.imgur.com/AuuN1WE.png"],                                                                        // Slipstream
                ["https://i.imgur.com/A4nQdUK.png"],                                                                        // Labyrinth
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/c/cb/ChampionCrate1.png/revision/latest"],       // CC1
                ["https://vignette2.wikia.nocookie.net/rocketleague/images/6/64/ChampionCrate2.png/revision/latest"],       // CC2
                ["https://vignette4.wikia.nocookie.net/rocketleague/images/a/a5/ChampionCrate3.png/revision/latest"],       // CC3
                ["http://i.imgur.com/ULM4ZZQ.png"],                                                                         // CC4
                ["https://vignette4.wikia.nocookie.net/rocketleague/images/3/3d/PlayerCrate1.png/revision/latest"],         // PCC
                ["http://i.imgur.com/hUntL0Q.png"],                                                                         // Turbo Crate
                ["https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",             // Endo
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest",
                    "https://vignette3.wikia.nocookie.net/rocketleague/images/2/26/Endo_body.png/revision/latest"],
                ["http://i.imgur.com/jtbJfCD.png"],                                                                         // Octane ZSR
                ["http://i.imgur.com/PL7siKm.png"],                                                                         // Dominus GT
                ["http://i.imgur.com/rmy4RoR.png"],                                                                         // Breakout Type-S
                ["http://i.imgur.com/JMIuHzW.png"],                                                                         // Takumi RX-T
                ["http://i.imgur.com/ytIRZUF.png"],                                                                         // X-Devil MK2
                ["http://i.imgur.com/wdoH5wV.png"],                                                                         // Road Hog XL
                ["http://i.imgur.com/GkbMpfw.png", "http://imgur.com/GkbMpfw.png", "http://imgur.com/GkbMpfw.png",          // Tachyon
                    "http://imgur.com/GkbMpfw.png", "http://imgur.com/GkbMpfw.png", "http://imgur.com/GkbMpfw.png", 
                    "http://imgur.com/GkbMpfw.png", "http://imgur.com/GkbMpfw.png", "http://imgur.com/GkbMpfw.png", 
                    "http://imgur.com/GkbMpfw.png", "http://imgur.com/GkbMpfw.png", "http://imgur.com/GkbMpfw.png", 
                    "http://imgur.com/GkbMpfw.png", "http://imgur.com/GkbMpfw.png", "http://imgur.com/GkbMpfw.png"],
                ["http://i.imgur.com/GbCrxxB.png"],                                                                         // Xenosplash
                ["http://i.imgur.com/C9Kxidm.png"],                                                                         // Proton
                ["http://i.imgur.com/iV4BhOr.png"],                                                                         // Hypernova
                ["http://i.imgur.com/jUzVv8p.png"],                                                                         // Dark Matter
                ["http://i.imgur.com/JTGuJjX.png"],                                                                         // Trinity
                ["http://i.imgur.com/TfpFj9r.png"],                                                                         // Pixel Fire
                ["http://i.imgur.com/28Hrhu7.png"],                                                                         // Polygonal
                ["http://i.imgur.com/GSCtUoU.png"]                                                                          // Furry
                ];

// jQuery stuff    
$(document).ready(function() {
    // Displays an alert when the user picks and invalid color
    $("body").on("change", ".colorChanger", function() {
        if (currPrice == null) {
            $('#alert').remove();
            $(this).parent().append('<div id="alert">This item does not come in this color.</div>');
            $('#alert').fadeOut(2500);
        }
    });
    
    // Search bar
    $("#search").on("keyup", function() {
        var term = this.value.toLowerCase();
        var items = $("#drop").children();
        for (var i = 3; i < items.length; i++) {
            var id = items[i].id.toLowerCase();
            if (id.indexOf(term) == -1) {
                $(items[i]).hide();
            } else {
                $(items[i]).show();
            }
        }
    });
    $(".dropbtn").click(function() {
        var items = $("#drop").children();
        for (var i = 3; i < items.length; i++) {
            $(items[i]).show();
        }
    });
    
    // Filters
    $("body").on("click", "#wheel", filterClick);
    $("body").on("click", "#decal", filterClick);
    $("body").on("click", "#body", filterClick);
    $("body").on("click", "#rocket_trail", filterClick);
    $("body").on("click", "#topper", filterClick);
    $("body").on("click", "#antenna", filterClick);
    $("body").on("click", "#paint", filterClick);
    $("body").on("click", "#crate", filterClick);
    $("body").on("click", "#uncommon", filterClick);
    $("body").on("click", "#rare", filterClick);
    $("body").on("click", "#very_rare", filterClick);
    $("body").on("click", "#import", filterClick);
    $("body").on("click", "#exotic", filterClick);
    $("body").on("click", "#black_market", filterClick);
    $("body").on("click", "#limited", filterClick);
    
    function filterClick() {
        var items = $("#drop").children();
        var types = $("#type").children();
        var qualities = $("#quality").children();
        var checkedT = [];
        var checkedQ = [];
        for (var i = 0; i < types.length; i++) {
            var chillen = $(types[i]).children();
            var check = chillen[1];
            if ($(check).prop("checked")) {
                checkedT.push($(check).attr("id"));
            }
        }
        for (var i = 0; i < qualities.length; i++) {
            var chillen = $(qualities[i]).children();
            var check = chillen[1];
            if ($(check).prop("checked")) {
                checkedQ.push($(check).attr("id"));
            }
        }
        console.log(checkedT);
        console.log(checkedQ);

        // shows all items if there's no filters
        if (checkedT.length == 0 && checkedQ.length == 0) {
            for (var i = 3; i < items.length; i++) {
                $(items[i]).show();
            }
        } else {
            for (var i = 3; i < items.length; i++) {
                var type = $(items[i]).attr("type");
                console.log(type);
                var quality = $(items[i]).attr("quality");
                if (checkedQ.length == 0) {
                    if (jQuery.inArray(type, checkedT) !== -1) {
                        $(items[i]).show();
                    } else {
                        $(items[i]).hide();
                    }
                } else if (checkedT.length == 0) {
                    if (jQuery.inArray(quality, checkedQ) !== -1) {
                        $(items[i]).show();
                    } else {
                        $(items[i]).hide();
                    }
                } else {
                    if (jQuery.inArray(type, checkedT) !== -1 && jQuery.inArray(quality, checkedQ) !== -1) {
                        $(items[i]).show();
                    } else {
                        $(items[i]).hide();
                    }
                }
            }
        }
    }
});

(function() {
    "use strict";
    
    function $(id) {
        return document.getElementById(id);
    }
    var isTheirs = false;

    // Add items and set onClick handlers
    window.onload = function() {        
        $("filters").onclick = filters;
        
        $("currency").onchange = changeValue;
        
        $("clear").onclick = function() {
            clear("yoursAdd");
            clear("theirsAdd");
        };
        
        $("button1").onclick = function() {
            $("search").value = "";
            isTheirs = false;
            document.querySelector(".items").classList.toggle("show");
        };
        
        $("button2").onclick = function() {
            $("search").value = "";
            isTheirs = true;
            document.querySelector(".items").classList.toggle("show");
        };
        
        var items = document.querySelectorAll(".item");
        for (var i = 0; i < items.length; i++) {
            items[i].onclick = addItem;
            
            // Add value
            var value = prices[items[i].getAttribute("num")][0];
            items[i].setAttribute("value", value);
            
            // Add img
            var img = document.createElement("img");
            img.className = "nope";
            img.src = links[items[i].getAttribute("num")][0];
            items[i].appendChild(img);
            img.alt = items[i].id;
            
            // Add name
            var p = document.createElement("p");
            p.innerHTML = items[i].id;
            p.classList.add("name");
            p.classList.add("nope");
            var span = document.createElement("span");
            setSpan(span, items[i].getAttribute('value'));
            p.appendChild(span);
            items[i].appendChild(p);
        }
    };
    
    // Hides all dropdown stuff when you click anywhere else on the screen
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.nope') && !event.target.matches('.item') && !event.target.matches('.items')) {
            var dropdown = document.querySelector(".items");
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
                var filters = document.querySelectorAll(".check");
                for (var i = 0; i < filters.length; i++) {
                    filters[i].checked = false;
                }
            }
        }
        
        if (!event.target.matches('.menu') && !event.target.matches('.but') && !event.target.matches('.menuNope')) {
            clearMenus();
        }
    };
        
    // Shows and hides items based on the filters
    function filters() {
        var filter = document.createElement("div");
        filter.className = "filterDiv nope";
        this.parentElement.appendChild(filter);
        filter.style.fontSize = "16pt";
        filter.style.display = "flex";
        filter.style.justifyContent = "space-between";
        
        var types = document.createElement("div");
        types.id = "type";
        types.className = "nope";
        filter.appendChild(types);
        types.innerHTML = "&nbsp;&nbsp;Type:";

        // Wheels label
        var label = document.createElement("label");
        label.appendChild(document.createElement("br"));
        label.className = "nope";
        types.appendChild(label);
        label.style.fontSize = "14pt";
        var check = document.createElement("input");
        check.type = "checkbox";
        check.className = "nope check";
        check.id = "wheel";
        label.appendChild(check);
        label.innerHTML = label.innerHTML + "Wheels";
        
        // Decal label
        var label2 = document.createElement("label");
        label2.appendChild(document.createElement("br"));
        label2.className = "nope";
        types.appendChild(label2);
        label2.style.fontSize = "14pt";
        var check2 = document.createElement("input");
        check2.type = "checkbox";
        check2.className = "nope check";
        check2.id = "decal";
        label2.appendChild(check2);
        label2.innerHTML = label2.innerHTML + "Decal";
        
        // Body label
        var label3 = document.createElement("label");
        label3.appendChild(document.createElement("br"));
        label3.className = "nope";
        types.appendChild(label3);
        label3.style.fontSize = "14pt";
        var check3 = document.createElement("input");
        check3.type = "checkbox";
        check3.className = "nope check";
        check3.id = "body";
        label3.appendChild(check3);
        label3.innerHTML = label3.innerHTML + "Body";
        
        // Rocket Trail label
        var label4 = document.createElement("label");
        label4.appendChild(document.createElement("br"));
        label4.className = "nope";
        types.appendChild(label4);
        label4.style.fontSize = "14pt";
        var check5 = document.createElement("input");
        check5.type = "checkbox";
        check5.className = "nope check";
        check5.id = "rocket_trail";
        label4.appendChild(check5);
        label4.innerHTML = label4.innerHTML + "Rocket Trail";
        
        // Topper label
        var label5 = document.createElement("label");
        label5.appendChild(document.createElement("br"));
        label5.className = "nope";
        types.appendChild(label5);
        label5.style.fontSize = "14pt";
        var check5 = document.createElement("input");
        check5.type = "checkbox";
        check5.className = "nope check";
        check5.id = "topper";
        label5.appendChild(check5);
        label5.innerHTML = label5.innerHTML + "Topper";
        
        // Antenna label
        var label6 = document.createElement("label");
        label6.appendChild(document.createElement("br"));
        label6.className = "nope";
        types.appendChild(label6);
        label6.style.fontSize = "14pt";
        var check6 = document.createElement("input");
        check6.type = "checkbox";
        check6.className = "nope check";
        check6.id = "antenna";
        label6.appendChild(check6);
        label6.innerHTML = label6.innerHTML + "Antenna";
        
        // Paint Finish label
        var label7 = document.createElement("label");
        label7.appendChild(document.createElement("br"));
        label7.className = "nope";
        types.appendChild(label7);
        label7.style.fontSize = "14pt";
        var check7 = document.createElement("input");
        check7.type = "checkbox";
        check7.className = "nope check";
        check7.id = "paint";
        label7.appendChild(check7);
        label7.innerHTML = label7.innerHTML + "Paint Finish";
        
        // Crates label
        var label8 = document.createElement("label");
        label8.appendChild(document.createElement("br"));
        label8.className = "nope";
        types.appendChild(label8);
        label8.style.fontSize = "14pt";
        var check8 = document.createElement("input");
        check8.type = "checkbox";
        check8.className = "nope check";
        check8.id = "crate";
        label8.appendChild(check8);
        label8.innerHTML = label8.innerHTML + "Crates";
        
        var quality = document.createElement("div");
        quality.className = "nope";
        quality.id = "quality";
        filter.appendChild(quality);
        quality.innerHTML = "&nbsp;&nbsp;Quality:";

        // Uncommon label
        var label9 = document.createElement("label");
        label9.appendChild(document.createElement("br"));
        label9.className = "nope";
        quality.appendChild(label9);
        label9.style.fontSize = "14pt";
        var check9 = document.createElement("input");
        check9.type = "checkbox";
        check9.className = "nope check";
        check9.id = "uncommon";
        label9.appendChild(check9);
        label9.innerHTML = label9.innerHTML + "Uncommon";
        
        // Rare label
        var label10 = document.createElement("label");
        label10.appendChild(document.createElement("br"));
        label10.className = "nope";
        quality.appendChild(label10);
        label10.style.fontSize = "14pt";
        var check10 = document.createElement("input");
        check10.type = "checkbox";
        check10.className = "nope check";
        check10.id = "rare";
        label10.appendChild(check10);
        label10.innerHTML = label10.innerHTML + "Rare";
        
        // Very Rare label
        var label11 = document.createElement("label");
        label11.appendChild(document.createElement("br"));
        label11.className = "nope";
        quality.appendChild(label11);
        label11.style.fontSize = "14pt";
        var check11 = document.createElement("input");
        check11.type = "checkbox";
        check11.className = "nope check";
        check11.id = "very_rare";
        label11.appendChild(check11);
        label11.innerHTML = label11.innerHTML + "Very Rare";
        
        // Import label
        var label12 = document.createElement("label");
        label12.appendChild(document.createElement("br"));
        label12.className = "nope";
        quality.appendChild(label12);
        label12.style.fontSize = "14pt";
        var check12 = document.createElement("input");
        check12.type = "checkbox";
        check12.className = "nope check";
        check12.id = "import";
        label12.appendChild(check12);
        label12.innerHTML = label12.innerHTML + "Import";
        
        // Exotic label
        var label13 = document.createElement("label");
        label13.appendChild(document.createElement("br"));
        label13.className = "nope";
        quality.appendChild(label13);
        label13.style.fontSize = "14pt";
        var check13 = document.createElement("input");
        check13.type = "checkbox";
        check13.className = "nope check";
        check13.id = "exotic";
        label13.appendChild(check13);
        label13.innerHTML = label13.innerHTML + "Exotic";
        
        // Black Market label
        var label14 = document.createElement("label");
        label14.appendChild(document.createElement("br"));
        label14.className = "nope";
        quality.appendChild(label14);
        label14.style.fontSize = "14pt";
        var check14 = document.createElement("input");
        check14.type = "checkbox";
        check14.className = "nope check";
        check14.id = "black_market";
        label14.appendChild(check14);
        label14.innerHTML = label14.innerHTML + "Black Market";
        
        // Limited label
        var label15 = document.createElement("label");
        label15.appendChild(document.createElement("br"));
        label15.className = "nope";
        quality.appendChild(label15);
        label15.style.fontSize = "14pt";
        var check15 = document.createElement("input");
        check15.type = "checkbox";
        check15.className = "nope check";
        check15.id = "limited";
        label15.appendChild(check15);
        label15.innerHTML = label15.innerHTML + "Limited";
    }
    
    // Hides all the menus
    function clearMenus() {
        var menus = document.querySelectorAll(".menu");
        for (var i = 0; i < menus.length; i++) {
            menus[i].style.display = "none";
        }
    }
    
    // Changes the values when the currency is changed
    function changeValue() {
        var type = parseInt(this.value);
        var items = document.querySelectorAll(".item");
        var items2 = document.querySelectorAll(".newItem");
        for (var i = 0; i < items.length; i++) {
            var children = items[i].children;
            if (type == 0) {
                items[i].setAttribute('value', items[i].getAttribute('value') * 60);
                var span = document.createElement("span");
                children[1].innerHTML = items[i].id;
                children[1].appendChild(span);
            } else {
                items[i].setAttribute('value', items[i].getAttribute('value') / 60);
                var span = document.createElement("span");
                children[1].innerHTML = items[i].id;
                children[1].appendChild(span);
            }
            setSpan(span, items[i].getAttribute('value'));
        }
        for (var i = 0; i < items2.length; i++) {
            var children = items2[i].children;
            if (type == 0) {
                items2[i].setAttribute('value', items2[i].getAttribute('value') * 60);
                var span = document.createElement("span");
                children[1].innerHTML = items2[i].id;
                children[1].appendChild(span);
            } else {
                items2[i].setAttribute('value', items2[i].getAttribute('value') / 60);
                var span = document.createElement("span");
                children[1].innerHTML = items2[i].id;
                children[1].appendChild(span);
            }
            setSpan(span, items2[i].getAttribute('value'));
        }
        var units = document.querySelectorAll(".units");
        for (var i = 0; i < units.length; i++) {
            if (type == 0) {
                units[i].innerHTML = "CC";
            } else  {
                units[i].innerHTML = "H";
            }
        }
        if (type == 0) {
            $("yourTotal").setAttribute("value", parseFloat($("yourTotal").getAttribute("value")) * 60);
            $("theirTotal").setAttribute("value", parseFloat($("theirTotal").getAttribute("value")) * 60);
        } else {
            $("yourTotal").setAttribute("value", parseFloat($("yourTotal").getAttribute("value")) / 60);
            $("theirTotal").setAttribute("value", parseFloat($("theirTotal").getAttribute("value")) / 60);
        }
        roundTotals();
    }
    
    // Clears the items from both lists
    function clear(id) {
        var children = $(id).children;
        while (children.length > 1) {
            $(id).removeChild(children[0]);
        }
        $("yourTotal").setAttribute("value", 0);
        $("theirTotal").setAttribute("value", 0);
        roundTotals();
        updateTotals();
    }
    
    // Adds the clicked item to the respective list of items
    function addItem() {
        var item = document.createElement("div");
        item.innerHTML = this.innerHTML;
        var children = item.children;
        for (var i = 0; i < children.length; i++) {
            children[i].className = '';
        }
        item.className = "newItem";
        item.id = this.id;
        item.setAttribute('value', this.getAttribute('value'));
        item.setAttribute('num', this.getAttribute('num'));
        if (this.classList.contains("wheel") || this.classList.contains("colorify")) {
            item.setAttribute("colorify", "yep");
        } else {
            item.setAttribute("colorify", "");
        }
        if(isTheirs) {
            $("theirsAdd").insertBefore(item, $("button2"));
            $("theirTotal").setAttribute("value", parseFloat($("theirTotal").getAttribute("value")) + parseFloat(this.getAttribute('value')));
            item.classList.add("theirItem");
        } else {
            $("yoursAdd").insertBefore(item, $("button1"));
            $("yourTotal").setAttribute("value", parseFloat($("yourTotal").getAttribute("value")) + parseFloat(this.getAttribute('value')));
            item.classList.add("yourItem");
        }
        var but = document.createElement("img");
        but.src = "settings.png";
        but.className = "but";            
        item.appendChild(but);
        but.onclick = menu;
        updateTotals();
        roundTotals();
    }
    
    // Sets the value of the given object to the given value and changes the color to the correct color
    function setSpan(obj, value) {
        if ($("heat").selected) {
            obj.innerHTML = " (" + Math.round(value * 1000) / 1000 + "H)";
            if (value < .02) {
                obj.className = "superCheap";
            } else if (value < .1) {
                obj.className = "cheap";
            } else if (value > 5) {
                obj.className = "superExpensive";
            } else if (value > 1) {
                obj.className = "expensive";
            } else {
                obj.className = "medium";
            }
        } else {
            obj.innerHTML = " (" + Math.round(value * 10) / 10 + "CC)";
            if (value < 1) {
                obj.className = "superCheap";
            } else if (value < 6) {
                obj.className = "cheap";
            } else if (value > 300) {
                obj.className = "superExpensive";
            } else if (value > 60) {
                obj.className = "expensive";
            } else {
                obj.className = "medium";
            }
        }
    }
    
    // Creates or opens the menu when you click on the settings cog
    function menu() {
        clearMenus();
        var children = this.parentElement.children;
        if (children.length > 3) {
            for (var i = 0; i < children.length; i++) {
                if (children[i].classList.contains("menu")) {
                    children[i].style.display = "block";
                }
            }
        } else {
            var menu = document.createElement("div");
            this.parentElement.appendChild(menu);
            menu.className = "menu";
            
            // color change dropdown
            console.log(this.parentElement.getAttribute("colorify"));
            if (this.parentElement.getAttribute("colorify")) {
                menu.innerHTML = "Color: ";
                var select = document.createElement("select");
                select.className = "menuNope colorChanger";
                menu.appendChild(select);
                appendOptions(select);
                select.onchange = changeColor;
                select.setAttribute("prev", 0);
                
                var hr = document.createElement("hr");
                menu.appendChild(hr);
                hr.className = "menuNope";
            }
            
            // remove button
            var button = document.createElement("button");
            button.innerHTML = "remove";
            button.style.backgroundColor = "red";
            button.onclick = removeItem;
            menu.appendChild(button);
        }
    }
    
    // Removes the item from the list
    function removeItem() {
        var item = this.parentElement.parentElement;
        if(item.classList.contains("theirItem")) {
            var oldTotal = parseFloat($("theirTotal").getAttribute("value"));
            $("theirTotal").setAttribute("value", oldTotal - item.getAttribute("value"));
            $("theirsAdd").removeChild(item);
        } else {
            var oldTotal = parseFloat($("yourTotal").getAttribute("value"));
            $("yourTotal").setAttribute("value", oldTotal - item.getAttribute("value"));
            $("yoursAdd").removeChild(item);
        }
        updateTotals();
        roundTotals();
    }
    
    // Changes the color, image, name, and prices based on the chosen color
    function changeColor() {
        var item = this.parentElement.parentElement;
        var priceTag = item.querySelector("span");
        currPrice = prices[item.getAttribute("num")][this.value];
        var oldPrice = parseFloat(item.getAttribute("value"));
        var options = this.children;
        
        if (currPrice != null) {
            this.setAttribute("prev", this.selectedIndex);
            
            // change image
            var img = item.querySelector("img");
            img.src = links[item.getAttribute("num")][this.value];
        
            // change name
            var id = item.id;
            id = id.split(/[ ,]+/);
            id = id[id.length - 1];
            if (this.value == 0) {
                item.id = id;
                img.alt = id;
            } else {
                item.id = options[this.selectedIndex].innerHTML + " " + id;
                img.alt = options[this.selectedIndex].innerHTML + " " + id;
            }
            updateName(item);
            
            // change price
            if ($("heat").selected) {
                item.setAttribute("value", currPrice);
                setSpan(priceTag, currPrice);
            } else {
                item.setAttribute("value", currPrice * 60);
                setSpan(priceTag, currPrice * 60);
            }
            
            // change total prices
            if(item.classList.contains("theirItem")) {
                var oldTotal = parseFloat($("theirTotal").getAttribute("value"));
                if ($("heat").selected) {
                    $("theirTotal").setAttribute("value", oldTotal - oldPrice + currPrice);
                } else {
                    $("theirTotal").setAttribute("value", oldTotal - oldPrice + currPrice * 60);
                }
            } else {
                var oldTotal = parseFloat($("yourTotal").innerHTML);
                if ($("heat").selected) {
                    $("yourTotal").setAttribute("value", oldTotal - oldPrice + currPrice);
                } else {
                    $("yourTotal").setAttribute("value", oldTotal - oldPrice + currPrice * 60);
                }
            }
            updateTotals();
            roundTotals();
        } else {
            this.selectedIndex = this.getAttribute("prev");
        }
    }
    
    // Changes the name of the item to match the color
    function updateName(item) {
        var p = item.querySelector("p");
        var span = p.querySelector("span");
        p.innerHTML = item.id;
        p.appendChild(span);
    }
    
    // Fills the select tag in the menu with options
    function appendOptions(select) {
        var opt0 = document.createElement("option");
        opt0.innerHTML = "None";
        select.appendChild(opt0);
        opt0.value = 0;
        var opt1 = document.createElement("option");
        opt1.innerHTML = "Black";
        select.appendChild(opt1);
        opt1.value = 1;
        var opt2 = document.createElement("option");
        opt2.innerHTML = "Titanium White";
        select.appendChild(opt2);
        opt2.value = 2;
        var opt3 = document.createElement("option");
        opt3.innerHTML = "Grey";
        select.appendChild(opt3);
        opt3.value = 3;
        var opt4 = document.createElement("option");
        opt4.innerHTML = "Crimson";
        select.appendChild(opt4);
        opt4.value = 4;
        var opt5 = document.createElement("option");
        opt5.innerHTML = "Pink";
        select.appendChild(opt5);
        opt5.value = 5;
        var opt6 = document.createElement("option");
        opt6.innerHTML = "Cobalt";
        select.appendChild(opt6);
        opt6.value = 6;
        var opt7 = document.createElement("option");
        opt7.innerHTML = "Sky Blue";
        select.appendChild(opt7);
        opt7.value = 7;
        var opt8 = document.createElement("option");
        opt8.innerHTML = "Burnt Sienna";
        select.appendChild(opt8);
        opt8.value = 8;
        var opt9 = document.createElement("option");
        opt9.innerHTML = "Saffron";
        select.appendChild(opt9);
        opt9.value = 9;
        var opt10 = document.createElement("option");
        opt10.innerHTML = "Lime";
        select.appendChild(opt10);
        opt10.value = 10;
        var opt11 = document.createElement("option");
        opt11.innerHTML = "Forest Green";
        select.appendChild(opt11);
        opt11.value = 11;
        var opt12 = document.createElement("option");
        opt12.innerHTML = "Orange";
        select.appendChild(opt12);
        opt12.value = 12;
        var opt13 = document.createElement("option");
        opt13.innerHTML = "Purple";
        select.appendChild(opt13);
        opt13.value = 13;
        var opt14 = document.createElement("option");
        opt14.innerHTML = "Full Set";
        select.appendChild(opt14);
        opt14.value = 14;
    }
    
    // Updates the color of the totals
    function updateTotals() {
        var your = Math.round(parseFloat($("yourTotal").getAttribute("value")) * 1000) / 1000;
        var their = Math.round(parseFloat($("theirTotal").getAttribute("value")) * 1000) / 1000;
        if (your > their) {
            $("theirTotal").style.color = "red";
            $("yourTotal").style.color = "green";
            $("theirResult").style.borderColor ="red";
            $("yourResult").style.borderColor ="green";
        } else if (their > your) {
            $("theirTotal").style.color = "green";
            $("yourTotal").style.color = "red";
            $("theirResult").style.borderColor ="green";
            $("yourResult").style.borderColor ="red";
        } else {
            $("theirTotal").style.color = "blue";
            $("yourTotal").style.color = "blue";
            $("theirResult").style.borderColor ="blue";
            $("yourResult").style.borderColor ="blue";
        }
    }
    
    // Rounds the totals to the nearest thousanth
    function roundTotals() {
        $("yourTotal").innerHTML = Math.round(parseFloat($("yourTotal").getAttribute("value")) * 1000) / 1000;
        $("theirTotal").innerHTML = Math.round(parseFloat($("theirTotal").getAttribute("value")) * 1000) / 1000;
    }
})();