(this.webpackJsonpspyderweb=this.webpackJsonpspyderweb||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"name":"Marcus Black","allegiance":"Villain","threatClass":"C","organization":"Black Syndicate","appearance":"A tall, fit man with grey hair and eyes, seeming to be on his late 30s or early 40s. Usually wearing dark clothes and sporting a medium sized beard.","personality":"Cold and cruel, Marcus comes off as a sociopath to some. Extremely selfish and egotistical, his motivations tend to resolve around making money and taking revenge on those who wronged him.","powers":"Despite a lack of actual powers, Marcus is one of the few Mundanes to be able to handle his own against supers one or two classes above him. Making up for his lack of superpowers with martial arts training, cleverness and ingenuity. He wields a powerful handgun, Black Bolt, and a healthy supply of thermal grenades, using them to their fullest extent when dealing with police or heroes alike. While one of the lowest rated villains in this database, he is not to be underestimated, especially working with the Black Syndicate, providing him with plenty of goons to aid him.","achievements":"Over the course of his career, Marcus has been responsible for the robberies of 15 different banks, 3 of which remarked for incredible security. He\'s also been told be behind two prison breaks, 4 terrorist attacks, and 17 counts of murder and manslaughter, including the killing of Booster Flash, a young superhero. His position at the head of the Black Syndicate has remained for over 10 years now after he usurped his own father, Oliver Black, for supposedly getting too soft."},{"name":"Mammoth","allegiance":"Villain","threatClass":"A","organization":"Independent","appearance":"An extremely tall, muscular man with long red/ginger hair, in his late 20s. When under his supervillain guise, he tends to wear a black and gold leotard, covering most of his body outside his head and arms. ","personality":"Mammoth is easy to anger, with a short temper and low self-control. Far from the sharpest tool in the shed, he gets especially angry when people insult his intelligence. He\'s been shown to occasionally be kind towards some, although his destructive outbursts ending with several destroyed buildings, vehicles and injured or dead people paint him as a wanted villain in most people\'s eyes.","powers":"Mammoth\'s powers rely on his physicality, more so than anything else. His strength is remarkable, easily able to lift 1000 tonnes with his outstanding strength, like a pair of double decker buses or long-haul trucks, and his toughness is similarly legendary, able to seemingly ignore many forms of physical damage that\'d kill other heroes. Even when hurt, he heals from damage extremely quickly, and his powerful legs allow him to jump well over a mile in distance in a single bound. If his immense power wasn\'t clear yet, he can grow in size to a height of about 10 meters, like a 5 storey building, where his strength and toughness grow even more, able to rip skyscrapers off the ground or throw a car over a hundred miles off.","achievements":"All things considered, Mammoth is still a young villain, yet his potential is obvious to all who see him. Using his outstanding strength and toughness, he\'s stolen over a ton of gold (worth over 50 million dollars) from one of the most fortified banks in the country by simply ripping off the walls and carrying the whole vault, leaping into the distance. When he\'s gotten angry, he\'s destroyed entire city blocks as well. He\'s battled and defeated veteran hero Blue Cyborg twice, and has yet to be apprehended for his crimes."},{"name":"Brian Steel","allegiance":"Villain","threatClass":"S","organization":"Independent","appearance":"A very tall, yet mostly ordinary looking man of latino descent, in his 30s. Usually wearing rather normal, cheap clothing, such as jeans and t-shirts.","personality":"Brian has been described by those who\'ve met him as a nihilist. A cynic who has never truly enjoyed life, and certainly doesn\'t believe there is a point to it. His indifference to the lives of others has proven to be the cause of large-scale deaths and property damage.","powers":"While Brian\'s powers are certainly not obvious at first sight, many who\'ve tried to attack him have seen exactly what he\'s capable of. Not only is he superhumanly strong, lifting over a dozen tons with ease, and surprisingly agile and quick for a man his size, along with significant combat capabilities, his defining feature is his durability. Even compared to other toughness heavyweights, Brian has shown to be entirely immune to damage of all sorts until now. Disregarding bullets, stabbing weaponry and large explosives without flinching, along with freezing cold, lightning strikes and fire breaths at most burning off his skin to reveal a metallic shell below it. In fact, attempts to starve him have proven fruitless as even basic necessities and aging itself have shown no impact on him.","achievements":"Despite one of the most incredible defensive suites of any Super seen yet, Brian has primarily kept to occasionally robbing jewelry or other luxury stores for goods to sell in the black market, and has kept from injuring bystanders as he does so (though he has no qualms with severely injuring or killing police officers or heroes who attempt to stop him). Considering his lack of need for sustenance, along with rather humble apparent possessions, it is unclear what he does with the money from these assaults."}]')},,,,,,,,function(e,n,a){},function(e,n,a){},,function(e,n,a){"use strict";a.r(n);var t=a(0),s=a.n(t),i=a(4),o=a.n(i),r=(a(10),a(5)),l=(a(11),a(2)),h=a(1);var c=function(){var e=Object(t.useState)("Hello! Welcome to the Sypderweb! Currently we have [".concat(l.length,"] villains in our database. What is your querry?\n> ")),n=Object(r.a)(e,2),a=n[0],s=n[1],i=Object(t.useRef)(null),o=function(){var e;i&&(null===(e=i.current)||void 0===e||e.focus())};return Object(h.jsx)("textarea",{ref:i,autoFocus:!0,spellCheck:!1,className:"console",value:a,onChangeCapture:function(e){if(o(),e.currentTarget.value.length<a.length){if(e.currentTarget.value.endsWith("\n>"))return;s(a.slice(0,-1))}else if(!e.currentTarget.value.endsWith("\n>  ")){var n=e.currentTarget.value.slice(-1);switch(console.log(n),n){case"\n":!function(e){if(2!==e.length){var n=e.slice(2).split(" ")[0],t=e.slice(3+n.length);switch(n){case"info":var i=l.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));s(i?a+"\nName: ".concat(i.name)+"\nAllegiance: ".concat(i.allegiance)+"\nThreat Class: ".concat(i.threatClass)+"\nOrganization: ".concat(i.organization)+"\n\nAppearance: ".concat(i.appearance)+"\n\nPersonality: ".concat(i.personality)+"\n\nPowers: ".concat(i.powers)+"\n\nAchievements: ".concat(i.achievements,"\n> "):a+"\n"+t+"not found on the database");break;case"list":s(a+"\n"+l.reduce((function(e,n){return e+n.name+"\n"}),"")+"> ");break;case"help":s(a+"\nclear - Cleans the terminal.\ninfo [villain name] - Prints info of the villain.\nlist - Shows a list of the villains in the database\n> ");break;case"clear":s("> ");break;default:s(a+"\nError! Command not recognized, please type 'help'.\n> ")}}else s(a+"\n> ")}(a.split("\n").pop()||"");break;default:s(a+n)}}},onClick:o})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(n){var a=n.getCLS,t=n.getFID,s=n.getFCP,i=n.getLCP,o=n.getTTFB;a(e),t(e),s(e),i(e),o(e)}))};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(c,{})}),document.getElementById("root")),d()}],[[13,1,2]]]);
//# sourceMappingURL=main.60e613c8.chunk.js.map