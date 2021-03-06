/**
 * Created by Carmen-Uni on 21/03/2017.
 */
var layoutCommon = {
    foot: 'Web created for demonstration purposes',
    goAbout: 'About us',
    goHome: 'MultiChat',
    goLogin: 'Login',
    goLoout: 'Logout',
    goProfile: 'See user profile',
    goVideochat: 'Go to videochat',
    year: new Date().getFullYear()
};
var config = require('../config');
var layoutMultichat = {
    drawings: 'Drawings',
    geolocation: 'Geolocation',
    messages: 'Messages',
    people: 'People',
    presentations: 'Presentations',
    audio: 'Audio broadcast',
    video: 'Video broadcast',
    videoconferences: 'Videoconferences',
    smiles: 'Smiles',
    food: 'Food',
    trips: 'Trips',
    adaptativo: 'Stream adaptativo'
};

module.exports.about = function(req, res, next) {
    res.render('about', {
        layoutCommon: layoutCommon,
        lang: {
            imageAlt: 'Technologies used',
            info: 'This Web has been created for demonstration purposes',
            infoLabel: 'Info',
            message: 'Some technologies that have been used are:' +
            '<br><ul>' +
            '<li><strong>WebSockets</strong> to deal with: messages (text, icons and ' +
            'pictures), drawings and presentations</li>' +
            '<li><strong>WebRTC</strong> to deal with: messages (voice and files) and ' +
            'videoconference (audio and video)</li>' +
            '<li><strong>etc...</strong> to </li>' +
            '</ul>In addition, we...',
            section: 'About',
            title: 'MultiChat: About'
            }
        });
};

module.exports.index = function(req, res, next) {
    if (req.sub == false) {
        res.render('index', {
        lang: {
            description: 'MultiChat with lots of features: texts, icons, pictures, ' +
            'voice, files, videoconference, radio and video broadcasting, collaborative ' +
            'drawing and presentations, and geoposition!',
            message: 'MultiChat',
            title: 'MultiChat: Home',
            feature1: {
                name: 'Messages',
                description1: 'Send and receive texts and icons',
                description2: 'Even pictures and attached files',
            },
            feature2: {
                name: 'Broadcasts',
                description1: 'Radio and video broadcasting',
                description2: 'Enjoy with your friends',
            },
            feature3: {
                name: 'Videoconferences',
                description1: 'Video and audio sharing',
                description2: 'Very scalable implementation',
            },
            feature4: {
                name: 'Drawings',
                description1: 'Collaborative drawing',
                description2: 'Different types of elements',
            },
            feature5: {
                name: 'Presentations',
                description1: 'Collaborative presentations',
                description2: 'See presentations online',
            },
            feature6: {
                name: 'Geolocalition',
                description1: 'Geolocation of users',
                description2: 'See where your friends are',
            },
            info: 'More info',
            login: 'Login',
            register: 'Register'
        }
        });
    }
    else {
        module.exports.multichat(req, res, next);
    }
};

module.exports.login = function(req, res, next) {
    if (req.sub == false) {
        res.render('login', {
            authenticated: req.sub,
            redirect: req.query.p, //if any
            layoutCommon: layoutCommon,
            lang: {
                title: 'MultiChat: Login',
                already: 'Not a registered user?',
                registerHere: 'Register!',
                fieldSizeCheck: 'The value must have between 3 and 20 characters',
                password: 'Password',
                passwordEnter: 'Enter your password',
                passwordRequired: 'Tell us your password',
                section: 'Login',
                submit: 'Submit',
                userName: 'User name',
                userNameEnter: 'Enter your user name',
                userNameRequired: 'Tell us your user name',
                userNotValid: 'The username or the password introduced are not valid. Please, try again',
                error: 'An error has been produced'
            }
        });
    }
    else {
        module.exports.multichat(req, res, next);
    }

};

module.exports.logout = function(req, res, next) {
    res.render('logout', {
        authenticated: true,
        layoutCommon: layoutCommon,
        lang: {
            message: 'You have been loged out',
            section: 'Logout',
            successLabel: 'Success',
            title: 'MultiChat: Logout'
        }
    });
};

module.exports.profile = function(req, res, next) {
    res.render('profile', {
        authenticated: true,
        sub: req.sub,
        layoutCommon: layoutCommon,
        lang: {
            title: 'MultiChat: Profile',
            fieldSizeCheck: 'The value must have between 3 and 20 characters',
            hello: 'Hello',
            description: 'Here you may change your name info or your password',
            name: 'New name',
            surnames: 'New surnames',
            surnamesEnter: 'Enter your surnames',
            email: 'New email',
            emailValid: 'Email is not correct.',
            emailEnter: 'Enter your email',
            telephone: 'New telephone',
            telephoneEnter: 'Enter your telephone',
            password: 'New password',
            passwordEnter: 'Enter your new password',
            passwordRepeat: 'Repeat password',
            passwordRepeatEnter: 'Repeat your new password',
            passwordsCheck: 'The two passwords do not match',
            section: 'Profile',
            submit: 'Submit',
            userName: 'User name',
            error: 'An error has been produced',
            done: 'Changes have been done successfully',
            delete: 'Delete user'
        }
    });
};

module.exports.register = function(req, res, next) {
    if (req.sub == false) {
        res.render('register', {
            authenticated: req.sub,
            layoutCommon: layoutCommon,
            lang: {
                title: 'MultiChat: Register',
                already: 'Already a registered user?',
                loginHere: 'Login!',
                fieldSizeCheck: 'The value must have between 3 and 20 characters',
                fieldSizeCheckTelephone: 'The value must have 9 numbers',
                checking: 'Checking...',
                name: 'Name',
                nameEnter: 'Enter your name',
                nameRequired: 'Tell us your name',
                surnames: 'Surnames',
                surnamesEnter: 'Enter your surnames',
                surnamesRequired: 'Tell us your surnames',
                email: 'Email',
                emailValid: 'Email is not correct.',
                emailEnter: 'Enter your email',
                emailRequired: 'Tell us your email',
                telephone: 'Telephone',
                telephoneEnter: 'Enter your telephone',
                telephoneRequired: 'Tell us your telephone',
                password: 'Password',
                passwordEnter: 'Enter your password',
                passwordRequired: 'Tell us your password',
                passwordRepeat: 'Repeat password',
                passwordRepeatEnter: 'Repeat your password',
                passwordsCheck: 'The two passwords do not match',
                section: 'Register',
                submit: 'Submit',
                userName: 'User name',
                userNameEnter: 'Enter your user name',
                userNameRequired: 'Tell us your user name',
                userNameNotAvailable: 'The user name is not available. Please choose another one',
                error: 'An error has been produced'
            }
        });
    }
    else {
        module.exports.multichat(req, res, next);
    }
};

module.exports.multichat = function(req, res, next) {
    res.render('multichat', {
        authenticated: true,
        config: {
            videoUrl: config.videoUrl,
            audioUrl: config.audioUrl,
            presentationUrl: config.presentationUrl
        },
        sub: req.sub,
        layoutCommon: layoutCommon,
        layoutMultichat: layoutMultichat,
        lang: {
            addCircle: 'Add Cricle',
            addRectangle: 'Add Rectangle',
            addTriangle: 'Add Triangle',
            addEllipse: 'Add Ellipse',
            addStar: 'Add Star',
            removeShape: 'Remove selection',
            createImage: 'Create .png',
            pencil: 'Pencil',
            selectAudio: 'Select audio',
            selectVideo: 'Select video',
            selection: 'Selection',
            sendFiles: 'Send files and pictures',
            showEmojis: 'Show the list of available Emojis',
            clearAll: 'Clear all',
            disable: 'Turn off playback',
            send: 'Send',
            commentEnter: 'Type a message here',
            modal: {
                selectAudio: 'Select the URL of the audio you want to share',
                selectVideo: 'Select the URL of the video you want to share',
                url: 'URL',
                accept: 'Accept',
                cancel: 'Cancel'
            },
            title: 'Multichat'
        }
    });
};
