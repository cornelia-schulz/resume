
/* --------------------MENU---------------------------------*/
$(".menu-img").click(function() {
    $(".menu").hide();
    $("body").animate({
        left: "185px"
    }, 200);
});

$(".menu-close").click(function() {
    $(".menu").show();
    $("body").animate({
        left: "0px"
    }, 200);
});

var menu = {
    "item" : [
        {
            "name" : "Portfolio",
            "url" : "http://www.cornelia-schulz.info"
        },
        {
            "name" : "Resume",
            "url" : "index.html"
        }
    ],
    display : function() {
        for(var i = 0; i < this.item.length; i++) {
            $(".menu-items").append(HTMLmenuName.replace("%url%", this.item[i].url).replace("%data%", this.item[i].name));
        }
    }
};

menu.display();

/* -------------HEADER SECTION---------------------------- */
var bio = {
    "name" : "Cornelia Schulz",
    "role" : "Developer",
    "contactInfo" : {
        "email" : '<a href="mailto:firzhugh@gmail.com" target="_top">firzhugh@gmail.com</a>',
        "github" : '<a href="https://github.com/cornelia-schulz" target="_blank">cornelia-schulz</a>',
        "location" : "Auckland"
    },
    "pictureurl" : "images/profile-pic.png",
    "welcomeMessage" : "Thanks for browsing through my CV. If you think my skills could be of value to your company, please feel free to get in touch.",
    "skills" : [['Task', 'Years Experience'],
        ['Translation',     7],
        ['Localisation', 6.5],
        ['Project Management',      1],
        ['HTML',  3],
        ['CSS',    1],
        ['JavaScript', 0.7],
        ['Ajax', 0.1], 
        ['Git/Github', 0.6],
        ['Grunt', 0.2],
        ['Bootstrap', 0.5],
        ['React', 0.2],
        ['Redux', 0.2],
        ['Knex.js', 0.2],
        ['Express', 0.2],
        ['Node', 0.5],
        ['jQuery', 0.6]
    ],

    display : function() {
        var header = $("#header");
        var headerClass = $(".header");
        var formattedEmail = HTMLcontactGeneric.replace("%contact%", "email").replace("%data%", bio.contactInfo.email);
        var formattedGithub = HTMLcontactGeneric.replace("%contact%", "github").replace("%data%", bio.contactInfo.github);
        var formattedLocation = HTMLcontactGeneric.replace("%contact%", "location").replace("%data%", bio.contactInfo.location);
        $("#topContacts").append(formattedEmail, formattedGithub, formattedLocation);

        header.prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));
        header.append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
        header.prepend(HTMLbioPic.replace("%data%", bio.pictureurl));

        if(bio.skills && bio.skills.length > 0) {
            //headerClass.append(HTMLskillsStart);
            for(i=0; i<bio.skills.length; i++){
                //$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
    }
};
bio.display();

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable(bio.skills);

    var options = {
        title: 'Skills & Experience in Years',
        pieSliceText: 'label',
        slices: {  3: {offset: 0.2},
            6: {offset: 0.3},
            5: {offset: 0.4},
            7: {offset: 0.5}
        },
        pieStartAngle: 50
    };

    var chart = new google.visualization.PieChart(document.getElementById('skills'));

    chart.draw(data, options);
}


/* ------------------------WORK SECTION----------------------------*/
var workHistory = {
    "work" : [
        {
            "position" : "Localisation Coordinator",
            "employer" : "Fraedom Company Ltd",
            "time" : "Aug 2017 - ongoing",
            "location" : "Auckland, NZ",
            "description" : "Management of the localisation process within Fraedom"
        },
        {
            "position" : "Software Developer - Localisation",
            "employer" : "Fisher & Paykel Healthcare",
            "time" : "May 2015 - Aug 2017",
            "location" : "Auckland, NZ",
            "description" : "Overall management of the software localisation process within Obstructive Sleep Apnoea (OSA) division"
        },
        {
            "position" : "Freelance Translator",
            "employer" : "Self-employed",
            "time" : "Sep 2013 - May 2015",
            "location" : "Auckland, NZ",
            "description" : "I worked as an English to German freelance translator for a number of companies and agencies worldwide in the following areas:	(1)Travel & Tourism (2)Technical documentation  (3)Marketing documents (brochures, leaflets, etc) (4)General. My main specialities are Technical Documentation and Travel and Tourism due to having worked and trained in these areas extensively throughout the last 8 years."
        },
        {
            "position" : "Localisation Executive",
            "employer" : "Skyscanner Ltd",
            "time" : "Dec 2011- Sep 2013",
            "location" : "Edinburgh, UK",
            "description" : "My main role at Skyscanner involved working with the localisation and internationalisation side of the company. The role is split between working with many different parts of the company to improve the process and quality of localisation resources, and managing distributed localisation teams to handle the nearly 40 languages and cultures they offer on the website."
        },
        {
            "position" : "Customer Support / Service Desk Analyst",
            "employer" : "Skyscanner Ltd",
            "time" : "Nov 2009 - Dec 2011",
            "location" : "Edinburgh, UK",
            "description" : "My first role at Skyscanner involved providing multilingual support to website users across all markets via various communication mediums. I was involved in logging and documenting any problems with the website as well as triaging bugs and service requests for the business."
        },
        {
            "position" : "Area Sales Manager",
            "employer" : "Stoneridge Electronics Ltd",
            "time" : "Mar 2008 - Jul 2009",
            "location" : "Russelsheim, Germany",
            "description" : "Key support role to the company’s importers in Germany, Austria, Luxembourg, The Netherlands and the Czech Republic. Assess, introduce and present new products to key distributors using multiple communications media."
        },
        {
            "position" : "Customer Service Engineer",
            "employer" : "Stoneridge Electronics Ltd",
            "time" : "Jan 2005 - Mar 2008",
            "location" : "Dundee, UK",
            "description" : "Offered first and second line technical support for software and hardware products to English and German speaking customers by telephone, fax, e-mail and face to face; logging and documenting software and hardware problems."
        },
        {
            "position" : "IT Helpdesk Support",
            "employer" : "Alpha Landsteinar Ltd",
            "time" : "Aug 2004 - Oct 2004",
            "location" : "Swindon, UK",
            "description" : "Provided internal helpdesk support, logging queries and following up until resolved. Set up new equipment and repaired or organized repair of used equipment."
        },
        {
            "position" : "Multilingual Helpdesk Adviser",
            "employer" : "Twenty4Help",
            "time" : "Feb 2004 - Jul 2004",
            "location" : "Newcastle, UK",
            "description" : "Gave first and second line technical support to English and German speaking customers for networking equipment by telephone, fax and e-mail."
        },
        {
            "position" : "Multilingual IT Support",
            "employer" : "Star Tek Europe Ltd",
            "time" : "Sep 2002 - Feb 2004",
            "location" : "Hartlepool, UK",
            "description" : "Provided first line support on behalf of various multinational companies, responding to calls from Europe and America advising customers on product range and availability, technical support for multimedia games and parental control software, order taking for Filofaxes and HP driver software."
        }
    ],
    display : function() {
        var workExperience = $("#workExperience");
        for(var i = 0; i < 3; i++) {
            var formattedEmployer = HTMLworkEmployer.replace('%data%', this.work[i].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', this.work[i].position);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var work1 = HTMLworkStart + formattedEmployerTitle + HTMLworkDates.replace('%data%', this.work[i].time) + HTMLworkLocation.replace('%data%', this.work[i].location) + HTMLworkDescription.replace('%data%', this.work[i].description);
            $("#workExperience").append(work1);
            }
workExperience.append(HTMLworkMoreWork);
        for(var j = 3; j < this.work.length; j++){
            formattedEmployer = HTMLworkEmployer.replace('%data%', this.work[j].employer);
            formattedTitle = HTMLworkTitle.replace('%data%', this.work[j].position);
            formattedEmployerTitle = formattedEmployer + formattedTitle;
            work1 = HTMLworkStart + formattedEmployerTitle + HTMLworkDates.replace('%data%', this.work[j].time) + HTMLworkLocation.replace('%data%', this.work[j].location) + HTMLworkDescription.replace('%data%', this.work[j].description);
            $("#workMoreText").append(work1);
        }
        workExperience.append( HTMLworkReadMore);
        }
    };
workHistory.display();

$('a.w_read_more').showMore('#workMoreText', {});

/* ------------------------PROJECT SECTION---------------------------------- */
var projectHistory = {
    "project" : [
        {
            "title" : "Snake",
            "dates" : "2018",
            "description" : "Technologies: HTML, CSS, JavaScript. My version of the popular game Snake.",
            "image" : "images/snake.jpg",
            "url" : "http://cornelia-schulz.github.io/snake"
        },
        {
            "title" : "Minesweeper",
            "dates" : "2018",
            "description" : "Technologies: HTML, CSS, JavaScript. This is an Auckland version of the popular game Minesweeper.",
            "image" : "images/minesweeper.png",
            "url" : "http://cornelia-schulz.github.io/minesweeper"
        },
        {
            "title" : "Photography Website",
            "dates" : "2014-2018",
            "description" : "Technologies: HTML, CSS, JavaScript, jQuery, PHP. This is my own personal photography website. The aim was to exhibit my photographs in various categories which each come with a lightbox to enlarge the images.",
            "image" : "images/cornelia-schulz-photography.png",
            "url" : "http://www.cornelia-schulz-photography.com"
        },
        {
            "title" : "Frogger",
            "dates" : "2014",
            "description" : "Technologies: HTML, CSS, JavaScript, jQuery, Canvas, OOP. This is my version of the classic arcade game Frogger. Collect jewels and keys to get through the gates to hamster as many points as you can.",
            "image" : "images/frogger.png",
            "url" : "http://cornelia-schulz.github.io/frogger/"
        },
        {
            "title" : "Portfolio",
            "dates" : "2014",
            "description" : "Technologies: HTML, CSS, JavaScript, jQuery, Bootstrap. In this project I used the Twitter Bootstrap Framework to create a portfolio for my recent projects.",
            "image" : "images/portfolio.png",
            "url" : "http://cornelia-schulz.github.io/portfolio/"
        },
        {
            "title" : "Rock Paper Scissors",
            "dates" : "2014",
            "description" : "Technologies: HTML, CSS, JavaScript. In this project I used JavaScript to create the all-time favourite Rock Paper Scissors game.",
            "image" : "images/rock-paper-scissors.png",
            "url" : "https://cornelias-rock-paper-scissors.herokuapp.com/"
        }
    ],

    display : function() {
        for(var i = 0; i < this.project.length; i++) {
            if(i===0) {
                var projects = HTMLprojectStart.replace("%id%", "tab-"+i).replace("%data%", "tab"+i).replace("%checked%", "checked") + HTMLprojectLabel.replace("%id%", "tab-"+i).replace("%id+1%", i+1) + HTMLprojectTitle.replace("%data%", this.project[i].title).replace("%url%", this.project[i].url) + HTMLprojectDates.replace("%data%", this.project[i].dates) + HTMLprojectDescription.replace("%data%", this.project[i].description) + HTMLprojectImage.replace("%data%", this.project[i].image).replace("%url%", this.project[i].url);
            }
            else {
                projects = HTMLprojectStart.replace("%id%", "tab-"+i).replace("%data%", "tab"+i).replace("%checked%", "") + HTMLprojectLabel.replace("%id%", "tab-"+i).replace("%id+1%", i+1) + HTMLprojectTitle.replace("%data%", this.project[i].title).replace("%url%", this.project[i].url) + HTMLprojectDates.replace("%data%", this.project[i].dates) + HTMLprojectDescription.replace("%data%", this.project[i].description) + HTMLprojectImage.replace("%data%", this.project[i].image).replace("%url%", this.project[i].url);            }
            $(".tabs").append(projects);
        }
    }
};
projectHistory.display();

/* ----------------------------EDUCATION SECTION----------------------------- */
var education = {
    "schools" : [
        {
            "name" : "Martin-Luther-University",
            "location" : "Halle(Saale), Germany",
            "degree" : "Masters",
            "type" : "Majors",
            "major" : ["Japanese Studies", " Hispanic Studies"],
            "dates" : "1996-2001"
        }
    ],
    "courses" : [
        {
            "title" : "Web Development Bootcamp",
            "provider" : "Enspiral Dev Academy",
            "dates" : 2018,
            "url" : "https://devacademy.co.nz/"
        },
        {
            "title" : "ITIL Foundation",
            "provider" : "AXELOS",
            "dates" : 2017,
            "url" : "https://www.axelos.com/certifications/itil-certifications/itil-foundation-level"
        },
        {
            "title" : "Front-end Developer Nanodegree",
            "provider" : "Udacity",
            "dates" : 2014,
            "url" : "http://www.udacity.com"
        },
        {
            "title" : "Programming for Everybody",
            "provider" : "Coursera",
            "dates" : 2014,
            "url" : "http://www.coursera.org"
        },
        {
            "title" : "HTML, CSS, JavaScript & jQuery",
            "provider" : "Codecademy",
            "dates" : 2014,
            "url" : "http://www.codecademy.com"
        },
        {
            "title" : "Prince2 Foundation & Practitioner",
            "provider" : "APMG",
            "dates" : 2013,
            "url" : "http://www.apmg-international.com/en/qualifications/prince2/prince2.aspx"
        },
        {
            "title" : "MCSA Windows 8",
            "provider" : "",
            "dates" : 2013,
            "url" : "https://www.microsoft.com/learning/en-us/mcsa-windows-8-certification.aspx"
        },
        {
            "title" : "Excel Level 3",
            "provider" : "",
            "dates" : 2013,
            "url" : ""
        },
        {
            "title" : "Negotiating Skills",
            "provider" : "",
            "dates" : 2012,
            "url" : ""
        },
        {
            "title" : "Introduction to SQL",
            "provider" : "",
            "dates" : 2011,
            "url" : ""
        },
        {
            "title" : "Diploma in Translation",
            "provider" : "Institute of Linguists",
            "dates" : 2007,
            "url" : "http://www.iol.org.uk"
        },
        {
            "title" : "MCSA Windows 2000",
            "provider" : "Pitman Training",
            "dates" : 2004,
            "url" : "http://www.pitman-training.com"
        },
        {
            "title" : "MCP Windows 2000 Professional",
            "provider" : "Pitman Training",
            "dates" : 2003,
            "url" : "http://www.pitman-training.com"
        },
        {
            "title" : "CompTIA Network+ Certification",
            "provider" : "Pitman Training",
            "dates" : 2002,
            "url" : "http://www.pitman-training.com"
        },
        {
            "title" : "CompTIA A+ Computer Technician Certification",
            "provider" : "Pitman Training",
            "dates" : "2001-2002",
            "url" : "http://www.pitman-training.com"
        },
        {
            "title" : "Certificate of Spanish as a foreign language",
            "provider" : "University of Malaga, Spain",
            "dates" : "1999-2000",
            "url" : "http://www.uma.es"
        }
    ],
    display : function () {
        var education = $("#education");
        for(var i = 0; i < this.schools.length; i++) {
            var school = HTMLschoolStart + HTMLschoolName.replace('%data%', this.schools[i].name) + HTMLschoolDegree.replace('%data%', this.schools[i].degree) + HTMLschoolDates.replace('%data%', this.schools[i].dates) + HTMLschoolLocation.replace('%data%', this.schools[i].location) + HTMLschoolMajor.replace('%data%', this.schools[i].major).replace('%majors%', this.schools[i].type);
            education.append(school);
        }
        var courses = $("#courses");
        courses.append(HTMLonlineClasses);
        for(var j = 0; j < 4; j++) {
            var course = HTMLonlineTitle.replace("%data%", this.courses[j].title).replace("%url%", this.courses[j].url) + HTMLonlineSchool.replace("%data%", this.courses[j].provider) + HTMLonlineDates.replace("%data%", this.courses[j].dates);
            courses.append(course);
        }
        courses.append(HTMLonlineMoreCourses);
        for(var k = 4; k < this.courses.length; k++) {
            course = HTMLonlineTitle.replace("%data%", this.courses[k].title).replace("%url%", this.courses[k].url) + HTMLonlineSchool.replace("%data%", this.courses[k].provider) + HTMLonlineDates.replace("%data%", this.courses[k].dates);
            $("#coursesMoreText").append(course);
        }
        courses.append(HTMLonlineReadMore);
    }
};
education.display();

$('a.e_read_more').showMore('#coursesMoreText', {});

/* -----------------------MAP SECTION--------------------- */

$("#mapDiv").append(googleMap);


/* ----------------------CONNECT SECTION------------------- */
var connect = $("#bottomContacts");
connect.append(HTMLemail.replace("%data%", bio.contactInfo.email));
connect.append(HTMLgithub.replace("%data%", bio.contactInfo.github));
connect.append(HTMLlocation.replace("%data%", bio.contactInfo.location));


/* ------------CHECK FOR CONTENT-------------------- */

if($(".flex-item").length === 0) {
    $("#topContacts").css("display", "none");
    $("#letsConnect").css("display", "none");
}
if($("h1").length === 0) {
    $("#header").css("display", "none");
}
if($(".work-entry").length === 0) {
    $("#workExperience").css("display", "none");
}
if($(".tab").length === 0) {
    $("#projects").css("display", "none");
}
if($(".education-entry").length === 0) {
    $("#education").css("display", "none");
}
if($("#map") === undefined) {
    $("#mapDiv").css("display", "none");
}


