/*-----------------------------------------------------------------------------
A simple Language Understanding (LUIS) bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/
var restify = require('restify');
var builder = require('botbuilder');
var botbuilder_azure = require("botbuilder-azure");

var msg = "...";

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

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot.
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

var tableName = 'botdata';
var azureTableClient = new botbuilder_azure.AzureTableClient(tableName, process.env['AzureWebJobsStorage']);
var tableStorage = new botbuilder_azure.AzureBotStorage({ gzipData: false }, azureTableClient);

// Create your bot with a function to receive messages from the user
// This default message handler is invoked if the user's utterance doesn't
// match any intents handled by other dialogs.
var bot = new builder.UniversalBot(connector, function (session, args) {
    session.send('Sorry did not find idiom for \'%s\'.', session.message.text);
    session.endConversation(msg);
}).set('storage', tableStorage);

// Make sure you add code to validate these fields
var luisAppId = process.env.LuisAppId;
var luisAPIKey = process.env.LuisAPIKey;
var luisAPIHostName = process.env.LuisAPIHostName || 'westus.api.cognitive.microsoft.com';

const LuisModelUrl = 'https://' + luisAPIHostName + '/luis/v2.0/apps/' + luisAppId + '?subscription-key=' + luisAPIKey;

// Create a recognizer that gets intents from LUIS, and add it to the bot
var recognizer = new builder.LuisRecognizer(LuisModelUrl);
bot.recognizer(recognizer);




// Add a dialog for each intent that the LUIS app recognizes.
// See https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-recognize-intent-luis

bot.dialog('BlessingDisguise',
    (session) => {
        session.send('A good thing that seemed bad at first.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'BlessingDisguise'
});


bot.dialog('DimeDozen',
    (session) => {
        session.send('Something common.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'DimeDozen'
});


bot.dialog('BeatAroundBush',
    (session) => {
        session.send('Avoid saying what you mean, usually because it is uncomfortable.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'BeatAroundBush'
});


bot.dialog('BetterLateNever',
    (session) => {
        session.send('Better to arrive late than not to come at all.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'BetterLateNever'
});

bot.dialog('BiteBullet',
    (session) => {
        session.send('To get something over with because it is inevitable.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'BiteBullet'
});

bot.dialog('BreakLeg',
    (session) => {
        session.send('Good luck.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'BreakLeg'
});

bot.dialog('CallDay',
    (session) => {
        session.send('Stop working on something.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'CallDay'
});

bot.dialog('CutSomeSlack',
    (session) => {
        session.send('Don\'t be so critical.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'CutSomeSlack'
});


bot.dialog('CuttingCorners',
    (session) => {
        session.send('Doing something poorly in order to save time or money.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'CuttingCorners'
});


bot.dialog('EasyDoesIt',
    (session) => {
        session.send('Slow down.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'EasyDoesIt'
});

bot.dialog('OutOfHand',
    (session) => {
        session.send('Get out of control.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'OutOfHand'
});

bot.dialog('OutOfSystem',
    (session) => {
        session.send('Do the thing you\'ve been wanting to do so you can move on.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'OutOfSystem'
});


bot.dialog('ActTogether',
    (session) => {
        session.send('Work better or leave.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'ActTogether'
});


bot.dialog('BenefitDoubt',
    (session) => {
        session.send('Trust what someone says.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'BenefitDoubt'
});

bot.dialog('BackDrawingBoard',
    (session) => {
        session.send('Start over.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'BackDrawingBoard'
});


bot.dialog('HangInThere',
    (session) => {
        session.send('Don\'t give up.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'HangInThere'
});

bot.dialog('HitSack',
    (session) => {
        session.send('Go to sleep.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'HitSack'
});


bot.dialog('RocketScience',
    (session) => {
        session.send('It\'s not complicated.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'RocketScience'
});


bot.dialog('LetOffHook',
    (session) => {
        session.send('To not hold someone responsible for something.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'LetOffHook'
});

bot.dialog('LongStoryShort',
    (session) => {
        session.send('Tell something briefly.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'LongStoryShort'
});

bot.dialog('MissBoat',
    (session) => {
        session.send('It\'s too late.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'MissBoat'
});

bot.dialog('PainNoGain',
    (session) => {
        session.send('You have to work for what you want.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'PainNoGain'
});

bot.dialog('OnBall',
    (session) => {
        session.send('Doing a good job.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'OnBall'
});

bot.dialog('PullLeg',
    (session) => {
        session.send('To joke with someone.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'PullLeg'
});

bot.dialog('PullTogether',
    (session) => {
        session.send('Calm down.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'PullTogether'
});

bot.dialog('SoFarSoGood',
    (session) => {
        session.send('Things are going well so far.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'SoFarSoGood'
});

bot.dialog('SpeakDevil',
    (session) => {
        session.send('The person we were just talking about showed up!');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'SpeakDevil'
});


bot.dialog('LastStraw',
    (session) => {
        session.send('My patience has run out.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'LastStraw'
});

bot.dialog('BestBothWorlds',
    (session) => {
        session.send('An ideal situation.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'BestBothWorlds'
});


bot.dialog('FliesHavingFun',
    (session) => {
        session.send('You don\'t notice how long something lasts when it\'s fun.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'FliesHavingFun'
});

bot.dialog('BentShape',
    (session) => {
        session.send('To get upset.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'BentShape'
});

bot.dialog('MattersWorse',
    (session) => {
        session.send('Make a problem worse.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'MattersWorse'
});

bot.dialog('UnderWeather',
    (session) => {
        session.send('Sick.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'UnderWeather'
});

bot.dialog('CrossBridge',
    (session) => {
        session.send('Let\'s not talk about that problem right now.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'CrossBridge'
});

bot.dialog('WrapHeadAround',
    (session) => {
        session.send('Understand something complicated.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'WrapHeadAround'
});

bot.dialog('SayThatAgain',
    (session) => {
        session.send('That\'s true, I agree.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'SayThatAgain'
});

bot.dialog('GuessAsMine',
    (session) => {
        session.send('I have no idea.');
        session.endConversation(msg);
    }
).triggerAction({
    matches: 'GuessAsMine'
});
