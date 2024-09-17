// create random item generator
Array.prototype.random = function () { return this[Math.floor((Math.random()*this.length))]; }

// define days of the week
var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

// create selection of tops
var oxfords = ["White Oxford","Light-Blue Oxford","Cream Oxford"];
console.log("Oxfords: ", oxfords);
var polos = ["White Polo","Light-Blue Polo","Cream-Polo"];
console.log("Polos: ", polos);
var outerwears = ["White Crochet Shirt","Tan Crochet Shirt"];
console.log("Outerwear: ", outerwears);

document.write("Shirt<br>----------<br>")
// tops
for (var i = 0; i < week.length; i++)
{
    if (i==5)
    {
        var outerwear = outerwears.random();    // pick outerwear
        console.log(week[i],": ",outerwear);
        document.write(week[i],": ",outerwear,"<br>");
        outerwears.splice(outerwears.indexOf(outerwear), 1);    // throw outerwear in laundry bin
        console.log("Remaining Outerwear: ", outerwears);
    }
    else if (i == 0 || i == 2 || i == 4)
    {
        var oxford = oxfords.random();    // pick oxford
        console.log(week[i],": ",oxford);
        document.write(week[i],": ",oxford,"<br>");
        oxfords.splice(oxfords.indexOf(oxford), 1);    // throw oxford in laundry bin
        console.log("Remaining Oxfords: ", oxfords);
    }
    else if (i == 1 || i == 3 || i == 6)
    {
        var polo = polos.random();    // pick polo
        console.log(week[i],": ",polo);
        document.write(week[i],": ",polo,"<br>");
        polos.splice(polos.indexOf(polo), 1);    // throw polo in laundry bin
        console.log("Remaining Polos: ", polos);
    }
}

// create selection of bottoms
var pants = ["Black Chinos","Dark-Grey Chinos","Tan Chinos","Khaki Chinos","Navy Chinos"];
console.log("Pants: ", pants);
var shorts = ["Black Chino Shorts","Dark-Grey Chino Shorts","Khaki Chino Shorts","Navy Chino Shorts"];
console.log("Shorts: ", shorts);

document.write("<br>Pants<br>----------<br>")
// bottoms
for (var i = 0; i < week.length; i++)
{
    if (i==5)
    {
        var short = shorts.random();    // pick short
        console.log(week[i],": ",short);
        document.write(week[i],": ",short,"<br>");
        shorts.splice(shorts.indexOf(short), 1);    // throw short in laundry bin
        console.log("Remaining Shorts: ", shorts);
        i++;
        var short = shorts.random();    // pick short
        console.log(week[i],": ",short);
        document.write(week[i],": ",short,"<br>");
        shorts.splice(shorts.indexOf(short), 1);    // throw short in laundry bin
        console.log("Remaining Shorts: ", shorts);
        break;
    }
    var pant = pants.random();    // pick pant
    console.log(week[i],": ",pant);
    document.write(week[i],": ",pant,"<br>");
    pants.splice(pants.indexOf(pant), 1);    // throw pant in laundry bin
    console.log("Remaining Pants: ", pants);
}