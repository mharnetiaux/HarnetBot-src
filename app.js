/*-----------------------------------------------------------------------------
A simple Language Understanding (LUIS) bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/
var restify = require('restify');
var builder = require('botbuilder');
var botbuilder_azure = require("botbuilder-azure");

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
    openIdMetadata: process.env.BotOpenIdMetadata 
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

/*----- Bot Storage: ----- */

var tableName = 'botdata';
var azureTableClient = new botbuilder_azure.AzureTableClient(tableName, process.env['AzureWebJobsStorage']);
var tableStorage = new botbuilder_azure.AzureBotStorage({ gzipData: false }, azureTableClient);

// Make sure you add code to validate these fields
var luisAppId = process.env.LuisAppId;
var luisAPIKey = process.env.LuisAPIKey;
var luisAPIHostName = process.env.LuisAPIHostName || 'westus.api.cognitive.microsoft.com';

const LuisModelUrl = 'https://' + luisAPIHostName + '/luis/v2.0/apps/' + luisAppId + '?subscription-key=' + luisAPIKey;


// Create your bot with a function to receive messages from the user
// This default message handler is invoked if the user's utterance doesn't
// match any intents handled by other dialogs.

var bot = new builder.UniversalBot(connector, function (session, args) {
    session.send('Sorry did not find idiom for \'%s\'.', session.message.text);
}).set('storage', tableStorage);

// Create a recognizer that gets intents from LUIS, and add it to the bot
var recognizer = new builder.LuisRecognizer(LuisModelUrl);
bot.recognizer(recognizer);


// Add a dialog for each intent that the LUIS app recognizes.
bot.dialog('A blessing in disguise',
    (session) => {
        session.send('"A blessing in disguise"\n\nA good thing that seemed bad at first.');
    }
).triggerAction({
    matches: 'BlessingDisguise'
});

bot.dialog('A dime a dozen',
    (session) => {
        session.send('"A dime a dozen"\n\nSomething common.');
    }
).triggerAction({
    matches: 'DimeDozen'
});


bot.dialog('Beat around the bush',
    (session) => {
        session.send('"Beat around the bush"\n\nAvoid saying what you mean, usually because it is uncomfortable.');
    }
).triggerAction({
    matches: 'BeatAroundBush'
});


bot.dialog('Better late than never',
    (session) => {
        session.send('"Better late than never"\n\nBetter to arrive late than not to come at all.');
    }
).triggerAction({
    matches: 'BetterLateNever'
});

bot.dialog('Bite the bullet',
    (session) => {
        session.send('"Bite the bullet"\n\nTo get something over with because it is inevitable.');
    }
).triggerAction({
    matches: 'BiteBullet'
});

bot.dialog('Break a leg',
    (session) => {
        session.send('"Break a leg"\n\nGood luck.');
    }
).triggerAction({
    matches: 'BreakLeg'
});

bot.dialog('Call it a day',
    (session) => {
        session.send('"Call it a day"\n\nStop working on something.');
    }
).triggerAction({
    matches: 'CallDay'
});

bot.dialog('Cut somebody some slack',
    (session) => {
        session.send('"Cut somebody some slack"\n\nDon\'t be so critical.');
    }
).triggerAction({
    matches: 'CutSomeSlack'
});


bot.dialog('Cutting corners',
    (session) => {
        session.send('"Cutting corners"\n\nDoing something poorly in order to save time or money.');
    }
).triggerAction({
    matches: 'CuttingCorners'
});

bot.dialog('Easy does it',
    (session) => {
        session.send('"Easy does it"\n\nSlow down.');
    }
).triggerAction({
    matches: 'EasyDoesIt'
});

bot.dialog('Get out of hand',
    (session) => {
        session.send('"Get out of hand"\n\nGet out of control.');
    }
).triggerAction({
    matches: 'OutOfHand'
});

bot.dialog('OutOfSystem',
    (session) => {
        session.send('Do the thing you\'ve been wanting to do so you can move on.');
    }
).triggerAction({
    matches: 'OutOfSystem'
});


bot.dialog('ActTogether',
    (session) => {
        session.send('Work better or leave.');
    }
).triggerAction({
    matches: 'ActTogether'
});


bot.dialog('BenefitDoubt',
    (session) => {
        session.send('Trust what someone says.');
    }
).triggerAction({
    matches: 'BenefitDoubt'
});

bot.dialog('BackDrawingBoard',
    (session) => {
        session.send('Start over.');
    }
).triggerAction({
    matches: 'BackDrawingBoard'
});


bot.dialog('HangInThere',
    (session) => {
        session.send('Don\'t give up.');
    }
).triggerAction({
    matches: 'HangInThere'
});

bot.dialog('HitSack',
    (session) => {
        session.send('Go to sleep.');
    }
).triggerAction({
    matches: 'HitSack'
});


bot.dialog('RocketScience',
    (session) => {
        session.send('It\'s not complicated.');
    }
).triggerAction({
    matches: 'RocketScience'
});


bot.dialog('LetOffHook',
    (session) => {
        session.send('To not hold someone responsible for something.');
    }
).triggerAction({
    matches: 'LetOffHook'
});

bot.dialog('LongStoryShort',
    (session) => {
        session.send('Tell something briefly.');
    }
).triggerAction({
    matches: 'LongStoryShort'
});

bot.dialog('MissBoat',
    (session) => {
        session.send('It\'s too late.');
    }
).triggerAction({
    matches: 'MissBoat'
});

bot.dialog('PainNoGain',
    (session) => {
        session.send('You have to work for what you want.');
    }
).triggerAction({
    matches: 'PainNoGain'
});

bot.dialog('OnBall',
    (session) => {
        session.send('Doing a good job.');
    }
).triggerAction({
    matches: 'OnBall'
});

bot.dialog('PullLeg',
    (session) => {
        session.send('To joke with someone.');
    }
).triggerAction({
    matches: 'PullLeg'
});

bot.dialog('PullTogether',
    (session) => {
        session.send('Calm down.');
    }
).triggerAction({
    matches: 'PullTogether'
});

bot.dialog('SoFarSoGood',
    (session) => {
        session.send('Things are going well so far.');
    }
).triggerAction({
    matches: 'SoFarSoGood'
});

bot.dialog('SpeakDevil',
    (session) => {
        session.send('The person we were just talking about showed up!');
    }
).triggerAction({
    matches: 'SpeakDevil'
});


bot.dialog('LastStraw',
    (session) => {
        session.send('My patience has run out.');
    }
).triggerAction({
    matches: 'LastStraw'
});

bot.dialog('BestBothWorlds',
    (session) => {
        session.send('An ideal situation.');
    }
).triggerAction({
    matches: 'BestBothWorlds'
});


bot.dialog('FliesHavingFun',
    (session) => {
        session.send('You don\'t notice how long something lasts when it\'s fun.');
    }
).triggerAction({
    matches: 'FliesHavingFun'
});

bot.dialog('BentShape',
    (session) => {
        session.send('To get upset.');
    }
).triggerAction({
    matches: 'BentShape'
});

bot.dialog('MattersWorse',
    (session) => {
        session.send('Make a problem worse.');
    }
).triggerAction({
    matches: 'MattersWorse'
});

bot.dialog('UnderWeather',
    (session) => {
        session.send('Sick.');
    }
).triggerAction({
    matches: 'UnderWeather'
});

bot.dialog('CrossBridge',
    (session) => {
        session.send('Let\'s not talk about that problem right now.');
    }
).triggerAction({
    matches: 'CrossBridge'
});

bot.dialog('WrapHeadAround',
    (session) => {
        session.send('Understand something complicated.');
    }
).triggerAction({
    matches: 'WrapHeadAround'
});

bot.dialog('SayThatAgain',
    (session) => {
        session.send('That\'s true, I agree.');
    }
).triggerAction({
    matches: 'SayThatAgain'
});

bot.dialog('GuessAsMine',
    (session) => {
        session.send('I have no idea.');

    }
).triggerAction({
    matches: 'GuessAsMine'
});
