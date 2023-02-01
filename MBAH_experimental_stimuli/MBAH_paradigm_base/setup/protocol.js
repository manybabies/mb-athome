function generateProtocol(child, pastSessions) {

    /* INSTRUCTIONS TO FILL THE VARIABLES */

    // Language (to retrieve the correct stimuli from Github)
    /*
    	Possible values :
    		- english
    		- japanese
    */
    let language = "english";

    // Identity
    let namePrincipalInvestigator = "Sho Tsuji";
    let contactPrincipalInvestigator = "shotsuji@ircn.jp";
    let institution = "The University of Tokyo";

    //  Consent Frame
    let datauseInstructions = "We are primarily interested in where your baby looks in reaction to the images and sounds. A research assistant will watch your video to measure the precise amount of time your baby spends looking at each picture.";
    let paymentInstructions = "After you finish the study, we will email you a $5 Amazon.com gift card within approximately three days. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you during the experiment. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience. There are no anticipated risks associated with participating.";
    let purposeInstructions = "Babies’ vision develops over the first year of life, and they look at new things every day!  Some things in their environment are still, some move, some are small, some are big. We would like to see what kind of shapes and patterns babies like to look at.";
    let proceduresInstructions = "Your baby will look at different shapes and patterns on the screen, some moving, some still. We are interested in which pictures your baby likes to look at. We will ask you (the parent) to look away from the screen to avoid influencing your child's responses.";
    let researchRightsStatement = "Participation in this study is voluntary. You can stop to participate at any time. Participation in this study does not necessarily mean consent to participate in other studies, and you can decide whether or not to participate each time. If you wish to withdraw your data from the analyzed sample after participating in the study, please contact the study contact person. If you notify us of your wish to withdraw your data before the publication of research results, the data will be promptly withdrawn. However, if the research results have already been published at the time consent is withdrawn, the data cannot be withdrawn from that publicatiom. In that case, please note that the data will be stored for at least 5 years after the end of the research. The institution in charge of the ethics review of this research is the University of Tokyo Life Sciences Ethics Committee (7-3-1 Hongo, Bunkyo-ku, Tokyo).";

    // Instructions Frame 1
    let title1 = "Welcome to our study!";
    let text1_1 = "Your baby does not need to be with you yet.";
    let text1_2 = "We will tell you when it is time to get your baby.";
    let text1_3 = "Babies’ vision develops over the first year of life, and they look at new things every day! Some things in their environment are still, some move, some are small, some are big. In this study, we would like to see what kind of shapes and patterns babies like to look at. Before the pandemic, lab studies looked at this preference. However, since then more and more communication started to take place online. We want to find out whether infants’ behaviour in online settings is comparable to their behaviour in live interactions.";
    let title2 = "Preview of what your baby will see";
    let text2_1 = "Your baby will see 12 pairs of still or moving pictures. We are interested in where they choose to look!";
    let text2_2 = "Below is a video of an example trial, if you would like to take a look now.";
    let title3 = "Next steps";
    let text3_1 = "Because this is an online study, we will first check to make sure your webcam is properly set up to record your baby's looking behavior.";
    let text3_2 = "Then, you'll have a chance to review the consent information, and we'll ask you to record a short video of yourself giving consent to participate in this study.";
    let text3_3 = "Finally, you'll be given some more detailed instructions about what to do during the experiment, and then we'll start!";
    let buttonText1 = "I'm ready to set up my webcam!";

    // Instructions Frame 2
    let title4 = "Please read this page carefully before you begin!";
    let title5 = "What to do during the experiment:";
    let text5_1 = "During the experiment, please hold your baby on your lap facing the screen. We'll ask that you <strong>look down or away from the screen</strong> like this during the experiment.";
    let text5_2 = "The reason we ask this is that your baby is learning from you all the time. You may unconsciously shift towards one side or the other and influence your baby's attention. We want to make sure we're measuring your baby's preferences, not yours!";
    let text5_3 = "Don’t worry if your baby isn’t interested in the screen the entire time. Even if they only look a little bit, we are still collecting valuable data.";
    let text5_4 = "Before the experiment begins, you'll have a few moments to turn around. When it is over, you'll hear an audio prompt letting you know you can look at the screen again. The experiment will last about <strong>6 minutes</strong>.";
    let title6 = "Make sure your speakers are loud enough:";
    let text6_1 = "Sometimes, your baby will hear sounds during the experiment.";
    let text6_2 = "Please play this sample audio track to make sure your baby will be able to <strong>hear it clearly</strong>!";
    let warningText1 = "Please try playing the sample audio.";
    let title7 = "If you need to end the experiment early:";
    let text7_1 = "If your baby gets too fussy or distracted to continue, you can end the experiment early by pressing <strong>CTRL + X</strong>. A box will appear on the screen. Select '<strong>Exit</strong>' to take you to the end of the study.";
    let text7_2 = "Even if you end the experiment early, we can still use the data from when your baby was looking.";
    let title8 = "After the experiment is over:";
    let text8_1 = "Once the experiment is over, you'll be taken to a brief <strong>exit survey</strong> where you can report any technical issues or feedback.";
    let text8_2 = "You will also select a <strong>privacy level</strong> for your videos.";
    let title9 = "It's time to get your baby & check the webcam view!";
    let text9_1 = "Get comfy, take a look above, and make sure your baby's eyes are <strong>clearly visible</strong> and not covered in shadow. The webcam should be <strong>centered</strong> relative to the screen.";
    let text9_2 = "The green button below will begin the study.";
    let buttonText2 = "My baby and I are in position & ready to start!\n(You'll have a few seconds to look away.)";

    // Debriefing Frame
    let debriefingTitle = "What was this study about?";
    let debriefingText = "In this study, we are interested in seeing what kinds of shapes and patterns babies like to look at, and whether they like to look at still or moving images. Babies’ vision develops over the first year of life, and we want to see whether this influences their preferences for certain shapes or patterns. We test this by measuring where babies look. For example, when they see a still image on the left and a moving one on the right, which side would they look at? \n\n Previous studies that took part in the lab already showed that babies prefer to look at moving compared to still objects. However, during the last year more and more interactions have taken place online rather than face-to-face (e.g. With babies facetiming their grandparents instead of seeing them in real life). We want to check whether infants behaviour differs between such online settings compared to live settings. \n\n  Another aspect that is different in an study at home compared to a lab study is that there might be more things going on at home, and your baby might be more distracted! This is why you might have either participated in a version of the study without or with music accompanying the shapes on screen. In a lab study, we would not usually have such music, but we want to check whether adding music makes it more fun for babies at home to participate in the study. \n\n We are running this study in many countries, and we also want to see whether babies across the world show the same preferences. \n\n There is no right or wrong in your baby’s response! We just want to see, in general, what babies think and how they learn at different ages. \n\n  This research wouldn’t be possible without awesome parents like you. To thank you for your participation, we’ll be emailing you a $5 Amazon gift card - this should arrive in your inbox within the next week after we confirm your consent video and check that your child is in the age range for this study. (If you don’t hear from us by then, feel free to reach out!) Thank you again for your participation!";

    // Device Survey Frame
    let deviceSurveyTitle1 = "You're almost done! Before we tell you what this study was about, please help us by answering a few questions. Please tell us about your device!";
    let deviceSurveyTitle2 = "What type of device did you use for this study?";
    let deviceSurveyTitle3 = "If known, please tell us the device brand and name (e.g. MacBook Air, Dell xps15)?";
    let deviceSurveyTitle4 = "If known, please tell us your device's screen size in inch (e.g. 15)?";
    let deviceType1 = "Laptop";
    let deviceType2 = "Desktop computer";
    let deviceType3 = "Tabconst";
    let deviceType4 = "Other";
    let deviceSurveyWarningMessage = "This is a required field.";
    let buttonText3 = "Next";

    // Gift card info Frame
    let giftSurveyTitle1 = "Providing the following information is required in order to receive compensation for this study. This information is used only to send your $5 gift card!";
    let giftSurveyTitle2 = "Last name";
    let giftSurveyTitle3 = "First name";
    let giftSurveyTitle4 = "Email address";
    let buttonText4 = "Next";


    /*

        HELPER FUNCTIONS

    */

    function permute(array) {
        var length = array.length,
            result = [array.slice()],
            c = new Array(length).fill(0),
            i = 1,
            k, p;

        while (i < length) {
            if (c[i] < i) {
                k = i % 2 && c[i];
                p = array[i];
                array[i] = array[k];
                array[k] = p;
                ++c[i];
                i = 1;
                result.push(array.slice());
            } else {
                c[i] = 0;
                ++i;
            }
        }
        return result;
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function detectThreeConsecCond(array, regexCond) {
        var length = array.length,
            result = false,
            i, x;
        for (i = 0; i < length - 2; i++) {
            if (regexCond.test(array[i]) &&
                regexCond.test(array[i + 1]) &&
                regexCond.test(array[i + 2])) {
                result = true;
                break;
            }
        }
        return result;
    }

    function countStimuliType(array, regexType) {
        var length = array.length,
            result = 0,
            i, x;
        for (i = 0; i < length; i++) {
            if (regexType.test(array[i])) {
                ++result;
            }
        }
        return result;
    }

    function shuffle(array) {
        var shuffled = array.slice();
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        return shuffled;
    }

    /*

        FUNCTIONS FOR EXPERIMENT

    */

    function selectStimuliArray(arrayAllStim) {
        let stimuli = arrayAllStim.slice();
        let selectedStimuli = [];
        selectedStimuli = arrayAllStim[getRandomIntInclusive(0, 1)];
        return selectedStimuli;
    }

    function createStimuliOrder(arraySelectedStimuli) {
        //shuffle stimuli
        let sequenceStimuli = shuffle(arraySelectedStimuli);

        // boolean variables to detect :
        // three trials in a row with same complexity
        let threeCpxHigh = detectThreeConsecCond(sequenceStimuli, /cpxH/);
        let threeCpxLow = detectThreeConsecCond(sequenceStimuli, /cpxL/);

        // three trials in a row belonging to same block
        let threeBlkSta = detectThreeConsecCond(sequenceStimuli, /blkS/);
        let threeBlkMvt = detectThreeConsecCond(sequenceStimuli, /blkM/);
        let threeBlkBoth = detectThreeConsecCond(sequenceStimuli, /blkB/);

        if (threeCpxHigh === true || threeCpxLow === true ||
            threeBlkSta === true || threeBlkMvt === true || threeBlkBoth === true) {
            return createStimuliOrder(arraySelectedStimuli);
        } else {
            return sequenceStimuli;
        }
    }

    /*

        COMMON (non-test-trial) FRAMES
    */
    // Retrieving the Github Folder associated with the indicated language
    let languageFolders = {
        english: "en_stimuli/",
        japanese: "ja_stimuli/"
    }
    let stimuliFolder = languageFolders[language];

    let frames = {

        "video-config": {
            "kind": "exp-video-config",
        },

        "video-consent": {
            "gdpr": false,
            "kind": "exp-lookit-video-consent",
            "PIName": namePrincipalInvestigator,
            "datause": datauseInstructions,
            "payment": paymentInstructions,
            "purpose": purposeInstructions,
            "template": "consent_003",
            "PIContact": namePrincipalInvestigator + " at " + contactPrincipalInvestigator,
            "procedures": proceduresInstructions,
            "institution": institution,
            "research_rights_statement": researchRightsStatement
        },

        "exit-survey": {
            "kind": "exp-lookit-exit-survey",
            "debriefing": {
                "text": debriefingText,
                "title": debriefingTitle
            }
        },

        "start-experiment": {
            "kind": "exp-lookit-images-audio",
            "audio": [{
                "src": "https://raw.githubusercontent.com/manybabies/mb-athome/master/MBAH_experimental_stimuli/MBAH_paradigm_base/" + stimuliFolder + "/mp3/Recording_Start.mp3",
                "type": "audio/mp3"
            }],
            "images": [{
                    "src": "https://raw.githubusercontent.com/manybabies/mb-athome/master/MBAH_experimental_stimuli/MBAH_paradigm_base/" + stimuliFolder + "/img/Recording_Start.png",
                    "top": 10,
                    "left": 35,
                    "width": 30
                },
                {
                    "src": "https://raw.githubusercontent.com/manybabies/mb-athome/master/MBAH_experimental_stimuli/MBAH_paradigm_base/global_stimuli/img/Preview_lapBaby.jpg",
                    "top": 40,
                    "left": 35,
                    "width": 30
                }
            ],
            //BaseDir": "https://raw.githubusercontent.com/Vantoine2019/mbah-vp/main/",
            "pageColor": "#bebeba",
            "audioTypes": [
                "mp3"
            ],
            "autoProceed": true,
            "maximizeDisplay": true,
            "startSessionRecording": true
        },

        "upload-recording": {
            "kind": "exp-lookit-stop-recording",
            "baseDir": "https://raw.githubusercontent.com/manybabies/mb-athome/master/MBAH_experimental_stimuli/MBAH_paradigm_base/global_stimuli/",
            "image": "attention_getter_img1.png",
            "imageAnimation": "spin",
            "displayFullscreen": false,
            "backgroundColor": "#bebeba"
        },

        "end-experiment": {
            "kind": "exp-lookit-images-audio",
            "audio": "Recording_End",
            "images": [{
                "src": "Recording_End.png",
                "width": 40,
                "position": "center"
            }],
            "baseDir": "https://raw.githubusercontent.com/manybabies/mb-athome/master/MBAH_experimental_stimuli/MBAH_paradigm_base/" + stimuliFolder,
            "pageColor": "#bebeba",
            "audioTypes": [
                "mp3"
            ],
            "autoProceed": false
        },

        "instructions-1": {
            "kind": "exp-lookit-instructions",
            "blocks": [{
                    "title": title1,
                    "listblocks": [{
                            "text": "<strong>" + text1_1 + "</strong> " + text1_2
                        },
                        {
                            "text": text1_3
                        }
                    ]
                },
                {
                    "title": title2,
                    "listblocks": [{
                            "text": text2_1
                        },
                        {
                            "text": text2_2
                        }
                    ],
                    "mediaBlock": {
                        "isVideo": true,
                        "sources": [{
                            "src": "https://raw.githubusercontent.com/manybabies/mb-athome/master/MBAH_experimental_stimuli/MBAH_paradigm_base/global_stimuli/mp4/blkB-cpxL-figC-mvtR-staL-sound5s-light.mp4",
                            "type": "video/mp4"
                        }],
                        "mustPlay": false
                    }
                },
                {
                    "title": title3,
                    "listblocks": [{
                            "text": text3_1
                        },
                        {
                            "text": text3_2
                        },
                        {
                            "text": text3_3
                        }
                    ]
                }
            ],
            "showWebcam": false,
            "nextButtonText": buttonText1
        },

        "instructions-2": {
            "kind": "exp-lookit-instructions",
            "blocks": [{
                    "text": "<strong>" + title4 + "</strong>"
                },
                {
                    "image": {
                        "src": "https://raw.githubusercontent.com/manybabies/mb-athome/master/MBAH_experimental_stimuli/MBAH_paradigm_base/global_stimuli/img/Preview_lapBaby.jpg"
                    },
                    "title": title5,
                    "listblocks": [{
                            "text": text5_1
                        },
                        {
                            "text": text5_2
                        },
                        {
                            "text": text5_3
                        },
                        {
                            "text": text5_4
                        }
                    ]
                },
                {
                    "title": title6,
                    "listblocks": [{
                            "text": text6_1
                        },
                        {
                            "text": text6_2
                        }
                    ],
                    "mediaBlock": {
                        "isVideo": false,
                        "sources": [{
                            "src": "https://raw.githubusercontent.com/manybabies/mb-athome/master/MBAH_experimental_stimuli/MBAH_paradigm_base/global_stimuli/mp3/Preview_sound.mp3",
                            "type": "audio/mp3"
                        }],
                        "mustPlay": true,
                        "warningText": warningText1
                    }
                },
                {
                    "title": title7,
                    "listblocks": [{
                            "text": text7_1
                        },
                        {
                            "text": text7_2
                        }
                    ]
                },
                {
                    "title": title8,
                    "listblocks": [{
                            "text": text8_1
                        },
                        {
                            "text": text8_2
                        }
                    ]
                }
            ],
            "showWebcam": true,
            "webcamBlocks": [{
                "title": title9,
                "listblocks": [{
                        "text": text9_1
                    },
                    {
                        "text": text9_2
                    }
                ]
            }],
            "nextButtonText": buttonText2
        },

        "device-survey": {
            "kind": "exp-lookit-survey",
            "formSchema": {
                "schema": {
                    "type": "object",
                    "title": deviceSurveyTitle1,
                    "properties": {
                        "type": {
                            "enum": [
                                deviceType1,
                                deviceType2,
                                deviceType3,
                                deviceType4
                            ],
                            "type": "string",
                            "title": deviceSurveyTitle2,
                            "default": ""
                        },
                        "name": {
                            "type": "string",
                            "title": deviceSurveyTitle3,
                            "required": false
                        },
                        "size": {
                            "type": "integer",
                            "maximum": 100,
                            "minimum": 0,
                            "title": deviceSurveyTitle4,
                            "required": false
                        },
                    }
                },
                "options": {
                    "fields": {
                        "name": {
                            "placeholder": "MacBook Air"
                        },
                        "type": {
                            "type": "radio",
                            "message": deviceSurveyWarningMessage,
                            "validator": "required-field",
                            "removeDefaultNone": true,
                            "sort": false
                        },
                        "size": {
                            "numericEntry": true
                        },
                    }
                }
            },
            "nextButtonText": buttonText3
        },

        "giftcardinfo": {
            "kind": "exp-lookit-survey",
            "formSchema": {
                "schema": {
                    "type": "object",
                    "title": giftSurveyTitle1,
                    "properties": {
                        "lastname": {
                            "type": "string",
                            "title": giftSurveyTitle2
                        },
                        "firstname": {
                            "type": "string",
                            "title": giftSurveyTitle3
                        },
                        "email": {
                            "type": "string",
                            "title": giftSurveyTitle4
                        }
                    },
                    "description": giftSurveyTitle1,
                    "dependencies": {}
                },
                "options": {
                    "fields": {
                        "lastname": {
                            "type": "text",
                            "order": 1
                        },
                        "firstname": {
                            "type": "text",
                            "order": 2
                        },
                        "email": {
                            "type": "text",
                            "order": 3
                        }
                    }
                }
            },
            "nextButtonText": buttonText4
        },

        "calibration": {
            "kind": "exp-lookit-video",
            "baseDir": "https://raw.githubusercontent.com/manybabies/mb-athome/master/MBAH_experimental_stimuli/MBAH_paradigm_base/global_stimuli/",
            "audioTypes": [
                "mp3"
            ],
            "videoTypes": [
                "mp4"
            ],
            "video": {
                "left": 5,
                "loop": false,
                "width": 90,
                "source": "calibration"
            },
            "doRecording": true,
            "backgroundColor": "#ffffff",
            "autoProceed": true,

            "requireAudioCount": 0,
            "requiredDuration": 0,
            "requireVideoCount": 1,

            "allowUserPause": false,
            "pauseWhenExitingFullscreen": false
        }
    };

    // Start off the frame sequence with config/consent frames; we'll add test trials as we construct them
    let frame_sequence = ['instructions-1', 'video-config', 'video-consent', 'instructions-2', 'start-experiment'];

    /*

        TEST FRAMES

    */

    // List of our possible stimuli (circles or squares)
    let STIMULI = [
        ["blkS-cpxL-figS-staL", "blkS-cpxL-figS-staR",
            "blkS-cpxH-figS-staL", "blkS-cpxH-figS-staR",
            "blkM-cpxL-figS-mvtL", "blkM-cpxL-figS-mvtR",
            "blkM-cpxH-figS-mvtL", "blkM-cpxH-figS-mvtR",
            "blkB-cpxL-figS-mvtL-staR", "blkB-cpxL-figS-mvtR-staL",
            "blkB-cpxH-figS-mvtL-staR", "blkB-cpxH-figS-mvtR-staL"
        ],

        ["blkS-cpxL-figC-staL", "blkS-cpxL-figC-staR",
            "blkS-cpxH-figC-staL", "blkS-cpxH-figC-staR",
            "blkM-cpxL-figC-mvtL", "blkM-cpxL-figC-mvtR",
            "blkM-cpxH-figC-mvtL", "blkM-cpxH-figC-mvtR",
            "blkB-cpxL-figC-mvtL-staR", "blkB-cpxL-figC-mvtR-staL",
            "blkB-cpxH-figC-mvtL-staR", "blkB-cpxH-figC-mvtR-staL"
        ]
    ];

    // Boolean for sound or not
    let SOUND = (getRandomIntInclusive(0, 1) == 1) ? true : false;

    // Selecting + ordering our stimuli for this session
    let stimuliThisChild = createStimuliOrder(selectStimuliArray(STIMULI));

    // test trials
    for (iTrial = 0; iTrial < 12; iTrial++) {

        lookitTrial = {
            "kind": "group",
            "frameList": [{
                "kind": "exp-lookit-video",
                "baseDir": "https://raw.githubusercontent.com/manybabies/mb-athome/master/MBAH_experimental_stimuli/MBAH_paradigm_base/global_stimuli/",
                "audioTypes": [
                    "mp3"
                ],
                "videoTypes": [
                    "mp4"
                ],
                "video": {
                    "left": 5,
                    "loop": false,
                    "width": 90,
                },
                "doRecording": true,
                "backgroundColor": "#bebeba",
                "autoProceed": true,

                "requireAudioCount": 0,

                "allowUserPause": false,
                "pauseWhenExitingFullscreen": false
            }]
        };

        // Adding video with or without sound
        if (SOUND) {
            lookitTrial["frameList"][0]["video"]["source"] = stimuliThisChild[iTrial].concat("-fullSound-happy-go-lucky-light");
            lookitTrial["frameList"][0]["requiredDuration"] = 0;
            lookitTrial["frameList"][0]["requireVideoCount"] = 1;
        } else {
            lookitTrial["frameList"][0]["video"]["source"] = stimuliThisChild[iTrial].concat("-sound5s-light");
            lookitTrial["frameList"][0]["requiredDuration"] = 25;
            lookitTrial["frameList"][0]["requireVideoCount"] = 0;
        }

        // Adding this frame to the list of frames and the sequence
        frameId = 'test-trial-' + (iTrial + 1);
        frames[frameId] = lookitTrial;
        frame_sequence.push(frameId);
    }

    // Finish up the frame sequence with the exit survey
    frame_sequence = frame_sequence.concat(['calibration', 'end-experiment', 'upload-recording', 'device-survey','giftcardinfo','exit-survey']);

    // Return a study protocol with "frames" and "sequence" fields just like when defining the protocol in JSON only
    return {
        frames: frames,
        sequence: frame_sequence
    };
}