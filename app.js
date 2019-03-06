const   LuisModelUrl = 'https://' + luisAPIHostName + '/luis/v2.0/apps/' + luisAppId + '?subscription-key=' + luisAPIKey,
        restify = require('restify'),
        builder = require('botbuilder'),
        botbuilder_azure = require("botbuilder-azure"),
        server = restify.createServer(),

        /*----- Connector init Bot Framework Service ----- */
        connector = new builder.ChatConnector({
            appId: process.env.MicrosoftAppId,
            appPassword: process.env.MicrosoftAppPassword,
            openIdMetadata: process.env.BotOpenIdMetadata
        }),

        /*----- Bot Storage ----- */
        tableName = 'botdata',
        azureTableClient = new botbuilder_azure.AzureTableClient(tableName, process.env['AzureWebJobsStorage']),
        tableStorage = new botbuilder_azure.AzureBotStorage({ gzipData: false }, azureTableClient),

        /*----- LOUIS Vaton Creds----- */
        luisAppId = process.env.LuisAppId,
        luisAPIKey = process.env.LuisAPIKey,
        luisAPIHostName = process.env.LuisAPIHostName || 'westus.api.cognitive.microsoft.com',

        /*----- init Bot ----- */
        bot = new builder.UniversalBot(connector, function (session, args) {
            session.send('Sorry did not find idiom for \'%s\'.', session.message.text);
        }).set('storage', tableStorage),

        /*----- init LOUIS ----- */
        recognizer = new builder.LuisRecognizer(LuisModelUrl);

/*----- init Server ----- */
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url);
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// Create a recognizer that gets intents from LUIS, and add it to the bot
bot.recognizer(recognizer);

// Add a dialog for each intent that the LUIS recognizes.
bot.dialog('A blessing in disguise',
    (session) => {
        session.send('"A blessing in disguise"\n\nA good thing that seemed bad at first.');
        session.endDialog();
    }
).triggerAction({
    matches: 'BlessingDisguise'
});

bot.dialog('A dime a dozen',
    (session) => {
        session.send('"A dime a dozen"\n\nSomething common.');
        session.endDialog();
    }
).triggerAction({
    matches: 'DimeDozen'
});


bot.dialog('Beat around the bush',
    (session) => {
        session.send('"Beat around the bush"\n\nAvoid saying what you mean, usually because it is uncomfortable.');
        session.endDialog();
    }
).triggerAction({
    matches: 'BeatAroundBush'
});


bot.dialog('Better late than never',
    (session) => {
        session.send('"Better late than never"\n\nBetter to arrive late than not to come at all.');
        session.endDialog();
    }
).triggerAction({
    matches: 'BetterLateNever'
});

bot.dialog('Bite the bullet',
    (session) => {
        session.send('"Bite the bullet"\n\nTo get something over with because it is inevitable.');
        session.endDialog();
    }
).triggerAction({
    matches: 'BiteBullet'
});

bot.dialog('Break a leg',
    (session) => {
        session.send('"Break a leg"\n\nGood luck.');
        session.endDialog();
    }
).triggerAction({
    matches: 'BreakLeg'
});

bot.dialog('Call it a day',
    (session) => {
        session.send('"Call it a day"\n\nStop working on something.');
        session.endDialog();
    }
).triggerAction({
    matches: 'CallDay'
});

bot.dialog('Cut somebody some slack',
    (session) => {
        session.send('"Cut somebody some slack"\n\nDon\'t be so critical.');
        session.endDialog();
    }
).triggerAction({
    matches: 'CutSomeSlack'
});


bot.dialog('Cutting corners',
    (session) => {
        session.send('"Cutting corners"\n\nDoing something poorly in order to save time or money.');
        session.endDialog();
    }
).triggerAction({
    matches: 'CuttingCorners'
});

bot.dialog('Easy does it',
    (session) => {
        session.send('"Easy does it"\n\nSlow down.');
        session.endDialog();
    }
).triggerAction({
    matches: 'EasyDoesIt'
});

bot.dialog('Get out of hand',
    (session) => {
        session.send('"Get out of hand"\n\nGet out of control.');
        session.endDialog();
    }
).triggerAction({
    matches: 'OutOfHand'
});

bot.dialog('Get something out of your system',
    (session) => {
        session.send('"Get something out of your system"\n\nDo the thing you\'ve been wanting to do so you can move on.');
        session.endDialog();
    }
).triggerAction({
    matches: 'OutOfSystem'
});


bot.dialog('Get your act together',
    (session) => {
        session.send('"Get your act together"\n\nWork better or leave.');
        session.endDialog();
    }
).triggerAction({
    matches: 'ActTogether'
});


bot.dialog('Give someone the benefit of the doubt',
    (session) => {
        session.send('"Give someone the benefit of the doubt"\n\nTrust what someone says.');
        session.endDialog();
    }
).triggerAction({
    matches: 'BenefitDoubt'
});

bot.dialog('Go back to the drawing board',
    (session) => {
        session.send('"Go back to the drawing board"\n\nStart over.');
        session.endDialog();
    }
).triggerAction({
    matches: 'BackDrawingBoard'
});


bot.dialog('HangInThere',
    (session) => {
        session.send('"Hang in there"\n\nDon\'t give up.');
        session.endDialog();
    }
).triggerAction({
    matches: 'HangInThere'
});

bot.dialog('Hit the sack',
    (session) => {
        session.send('"Hit the sack"\n\nGo to sleep.');
        session.endDialog();
    }
).triggerAction({
    matches: 'HitSack'
});


bot.dialog('It\'s not rocket science',
    (session) => {
        session.send('"It\'s not rocket science"\n\nIt\'s not complicated.');
        session.endDialog();
    }
).triggerAction({
    matches: 'RocketScience'
});


bot.dialog('Let someone off the hook',
    (session) => {
        session.send('"Let someone off the hook"\n\nTo not hold someone responsible for something.');
        session.endDialog();
    }
).triggerAction({
    matches: 'LetOffHook'
});

bot.dialog('Make a long story short',
    (session) => {
        session.send('"Make a long story short"\n\nTell something briefly.');
        session.endDialog();
    }
).triggerAction({
    matches: 'LongStoryShort'
});

bot.dialog('Miss the boat',
    (session) => {
        session.send('"Miss the boat"\n\nIt\'s too late.');
        session.endDialog();
    }
).triggerAction({
    matches: 'MissBoat'
});

bot.dialog('No pain, no gain',
    (session) => {
        session.send('"No pain, no gain"\n\nYou have to work for what you want.');
        session.endDialog();
    }
).triggerAction({
    matches: 'PainNoGain'
});

bot.dialog('On the ball',
    (session) => {
        session.send('"On the ball"\n\nDoing a good job.');
        session.endDialog();
    }
).triggerAction({
    matches: 'OnBall'
});

bot.dialog('Pull someone\'s leg',
    (session) => {
        session.send('"Pull someone\'s leg"\n\nTo joke with someone.');
        session.endDialog();
    }
).triggerAction({
    matches: 'PullLeg'
});

bot.dialog('Pull yourself together',
    (session) => {
        session.send('"Pull yourself together"\n\nCalm down.');
        session.endDialog();
    }
).triggerAction({
    matches: 'PullTogether'
});

bot.dialog('So far so good',
    (session) => {
        session.send('"So far so good"\n\nThings are going well so far.');
        session.endDialog();
    }
).triggerAction({
    matches: 'SoFarSoGood'
});

bot.dialog('Speak of the devil',
    (session) => {
        session.send('"Speak of the devil"\n\nThe person we were just talking about showed up!');
        session.endDialog();
    }
).triggerAction({
    matches: 'SpeakDevil'
});


bot.dialog('That\'s the last straw',
    (session) => {
        session.send('"That\'s the last straw"\n\nMy patience has run out.');
        session.endDialog();
    }
).triggerAction({
    matches: 'LastStraw'
});

bot.dialog('The best of both worlds',
    (session) => {
        session.send('"The best of both worlds"\n\nAn ideal situation.');
        session.endDialog();
    }
).triggerAction({
    matches: 'BestBothWorlds'
});


bot.dialog('Time flies when you\'re having fun',
    (session) => {
        session.send('"Time flies when you\'re having fun"\n\nYou don\'t notice how long something lasts when it\'s fun.');
        session.endDialog();
    }
).triggerAction({
    matches: 'FliesHavingFun'
});

bot.dialog('To get bent out of shape',
    (session) => {
        session.send('"To get bent out of shape"\n\nTo get upset.');
        session.endDialog();
    }
).triggerAction({
    matches: 'BentShape'
});

bot.dialog('To make matters worse',
    (session) => {
        session.send('"To make matters worse"\n\nMake a problem worse.');
        session.endDialog();
    }
).triggerAction({
    matches: 'MattersWorse'
});

bot.dialog('Under the weather',
    (session) => {
        session.send('"Under the weather"\n\nSick.');
        session.endDialog();
    }
).triggerAction({
    matches: 'UnderWeather'
});

bot.dialog('We\'ll cross that bridge when we come to it',
    (session) => {
        session.send('"We\'ll cross that bridge when we come to it"\n\nLet\'s not talk about that problem right now.');
        session.endDialog();
    }
).triggerAction({
    matches: 'CrossBridge'
});

bot.dialog('Wrap your head around something',
    (session) => {
        session.send('"Wrap your head around something"\n\nUnderstand something complicated.');
        session.endDialog();
    }
).triggerAction({
    matches: 'WrapHeadAround'
});

bot.dialog('You can say that again',
    (session) => {
        session.send('"You can say that again"\n\nThat\'s true, I agree.');
        session.endDialog();
    }
).triggerAction({
    matches: 'SayThatAgain'
});

bot.dialog('Your guess is as good as mine',
    (session) => {
        session.send('"Your guess is as good as mine"\n\nI have no idea.');
        session.endDialog();

    }
).triggerAction({
    matches: 'GuessAsMine'
});
