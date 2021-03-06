//         THE JSON DATA ******************************************
var bio = {
	"name": "Kyle Booth",
	"role": "Front-End Web Developer",
	"contacts": [{
		"mobile": "404-488-8721",
		"email": "kjbooth1000@yahoo.com",
		"github": "catahoulaleopard",
		"twitter": "@catahoulaleopar",
		"location": "Atlanta"
	}],
	"welcomeMessage": "Hi, Welcome!",
	"skills": ["HTML", "CSS", "JavaScript", "Web Design", "Writing"],
	"biopic": "images/kylebooth-2016-02.jpg",
	"display": function() {}
};

var education = {
	"schools": [{
		"name": "BYZoo",
		"location": "Provo",
		"degree": "BA",
		"majors": ["English"],
		"dates": "1993-1995",
		"url": "https://home.byu.edu/home/"
	}, {
		"name": "Utah State U",
		"location": "Logan",
		"degree": "Associate",
		"majors": ["Business Info Systems"],
		"dates": "2003-2004",
		"url": "https://www.usu.edu/"
	}],
	"onlineCourses": [{
		"title": " Version Control with Git and GitHub",
		"school": "Udacity",
		"date": "2016",
		"url": "https://www.udacity.com/courses/ud775"
	}, {
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": "2016",
		"url": "https://www.udacity.com/courses/ud804"
	}, {
		"title": "30 Days to Learn jQuery",
		"school": "Envato Tuts+",
		"date": "2015",
		"url": "http://code.tutsplus.com/courses/30-days-to-learn-jquery"
	}],
	"display": function() {}
};

var work = {
	"jobs": [{
		"employer": "Anderson Press Inc.",
		"title": "Contract Web Designer",
		"location": "Atlanta",
		"dates": "2006-2013",
		"description": "Worked with a team of designers and coders to build websites for a number of the subsidiary companies of the parent company."
	}, {
		"employer": "Standard-Examiner",
		"title": "Website Managing Editor",
		"location": "Ogden, UT",
		"dates": "2004-2006",
		"description": "Published and oversaw the publishing of each day's news stories to the newspaper's website."
	}],
	"display": function() {}
};

var projects = {
	"projects": [{
		"title": "Website: Theatre in the Square",
		"dates": "2016",
		"description": "Designed and built the website for Marietta\'s new Theatre in the Square.",
		"images": [
			"images/theatreinthesquare_thumbnail01.jpg",
			"images/theatreinthesquare_thumbnail02.jpg"
		],
		"url": "http://www.theatreinthesquare.net/"
	}, {
		"title": "Website: thenakedcrepe",
		"dates": "2016",
		"description": "Designed and built this cool small business's new website.",
		"images": [
			"images/thenakedcrepe_thumbnail01.jpg",
			"images/thenakedcrepe_thumbnail02.jpg"
		],
		"url": "http://www.thenakedcrepe.com/"
	}, {
		"title": "Website: darkhorsewoodworks",
		"dates": "2014-2015",
		"description": "Designed and built the company's new website.",
		"images": [
			"images/darkhorsewoodworks_thumbnail01.jpg",
			"images/darkhorsewoodworks_thumbnail02.jpg"
		],
		"url": "http://darkhorsewoodworks.com/"
	}, {
		"title": "Website: dimensionworks",
		"dates": "2015",
		"description": "Designed and built the company's new website.",
		"images": [
			"images/dimensionworks_thumbnail01.jpg"
		],
		"url": "http://www.dimensionworks.com/"
	}, {
		"title": "Sections of website: whitman.com",
		"dates": "2015",
		"description": "Worked with a small team of designers and coders on a complete redesign of whitman.com. Specifically, I worked on the UX of the overall site, including an interactive map and timeline.",
		"images": [
			"images/whitman_thumbnail01.jpg"
		],
		"url": "https://www.whitman.com/store/Inventory/Browse/National-Park-Quarters-Products"
	}],
	"display": function() {}
};


//         BEGIN DISPLAY FUNCTIONS ******************************************
//         WORK EXPERIENCE ***********************
work.display = function() {
	$("#workExperience").append(HTMLworkStart);

	var formattedWorkEmployer = [],
		formattedWorkTitle = [],
		formattedWorkDates = [],
		formattedWorkLocation = [],
		formattedWorkDescription = [],
		formattedWorkJob = [],
		formattedJobs = "";

	var formattedWorkList = function() {
		if (work.jobs.length > 0) {
			for (var i = 0; i < work.jobs.length; i++) {

				formattedWorkEmployer[i] = HTMLworkEmployer.replace($data, work.jobs[i].employer);
				formattedWorkTitle[i] = HTMLworkTitle.replace($data, work.jobs[i].title);
				formattedWorkDates[i] = HTMLworkDates.replace($data, work.jobs[i].dates);
				formattedWorkLocation[i] = HTMLworkLocation.replace($data, work.jobs[i].location);
				formattedWorkDescription[i] = HTMLworkDescription.replace($data, work.jobs[i].description);
				formattedWorkJob[i] = formattedWorkEmployer[i] + formattedWorkTitle[i] + formattedWorkDates[i] +
					formattedWorkLocation[i] + formattedWorkDescription[i];
				formattedJobs += formattedWorkJob[i];
			}
			return formattedJobs;
		} else return "****";
	};
	$(".work-entry").append(formattedWorkList);
};


//         REPLACEALL FUNCTION *****
String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};

//         COMMON VARIABLE *****
var $data = "%data%";


//         PROJECTS ***********************
projects.display = function() {
	var formattedProjectsTitle = [],
		formattedProjectsDates = [],
		formattedProjectsDescription = [],
		formattedProjectsImages = [],
		formattedProjectsProject = [],
		formattedProjects = "";

	function projectImagesList(projNum) {

		if (projects.projects[projNum].images.length > 0) {
			for (var j = 0; j < projects.projects[projNum].images.length; j++) {
				formattedProjectsImages[projNum] += HTMLprojectImage.replace($data, projects.projects[projNum].images[j])
					.replace("%data-url%", projects.projects[projNum].url);
			}
			return formattedProjectsImages[projNum];
		} else return "****";
	}

	var formattedProjectsList = function() {
		if (projects.projects.length > 0) {
			for (var i = 0; i < projects.projects.length; i++) {

				formattedProjectsTitle[i] = HTMLprojectTitle.replace($data, projects.projects[i].title);
				formattedProjectsDates[i] = HTMLprojectDates.replace($data, projects.projects[i].dates);
				formattedProjectsDescription[i] = HTMLprojectDescription.replace($data, projects.projects[i].description)
					.replace("%data-url%", projects.projects[i].url);
				formattedProjectsImages[i] = "";

				formattedProjectsProject[i] = formattedProjectsTitle[i] + formattedProjectsDates[i] +
					formattedProjectsDescription[i] + projectImagesList(i);
				formattedProjects += formattedProjectsProject[i];
			}
			return formattedProjects;
		} else return "****";
	};


	$("#projects").append(HTMLprojectStart);




	$(".project-entry").append(formattedProjectsList);
};


//         EDUCATION ***********************
education.display = function() {

	var formattedSchoolName = [],
		formattedSchoolDegree = [],
		formattedSchoolDates = [],
		formattedSchoolLocation = [],
		formattedSchoolMajor = [],
		formattedSchoolSchool = [],
		formattedSchools = "";

	function majorsList(schoolNum) {

		if (education.schools[schoolNum].majors.length > 0) {
			for (var j = 0; j < education.schools[schoolNum].majors.length; j++) {
				formattedSchoolMajor[schoolNum] += HTMLschoolMajor.replace($data, education.schools[schoolNum].majors[j])
					.replace("%data-url%", education.schools[schoolNum].url);
			}
			return formattedSchoolMajor[schoolNum];
		} else return "****";
	}

	var formattedSchoolsList = function() {
		if (education.schools.length > 0) {
			for (var i = 0; i < education.schools.length; i++) {

				formattedSchoolName[i] = HTMLschoolName.replace($data, education.schools[i].name)
					.replace("#", education.schools[i].url);
				formattedSchoolDegree[i] = HTMLschoolDegree.replace($data, education.schools[i].degree);
				formattedSchoolDates[i] = HTMLschoolDates.replace($data, education.schools[i].dates);
				formattedSchoolLocation[i] = HTMLschoolLocation.replace($data, education.schools[i].location);
				formattedSchoolMajor[i] = ""; //majorsList(i);//HTMLschoolMajor.replace($data, education.schools[i].majors[0]);   // *****************************************majors
				formattedSchoolSchool[i] = formattedSchoolName[i] + formattedSchoolDegree[i] + formattedSchoolDates[i] +
					formattedSchoolLocation[i] + majorsList(i);
				formattedSchools += formattedSchoolSchool[i];
			}
			return formattedSchools;
		} else return "****";
	};

	var formattedOnlineTitle = [],
		formattedOnlineSchool = [],
		formattedOnlineDates = [],
		formattedOnlineURL = [],
		formattedOnlineCourse = [],
		formattedOnlineCourses = "";

	var formattedCoursesList = function() {
		if (education.onlineCourses.length > 0) {
			for (var i = 0; i < education.onlineCourses.length; i++) {

				formattedOnlineTitle[i] = HTMLonlineTitle.replace($data, education.onlineCourses[i].title)
					.replace("#", education.onlineCourses[i].url);;
				formattedOnlineSchool[i] = HTMLonlineSchool.replace($data, education.onlineCourses[i].school);
				formattedOnlineDates[i] = HTMLonlineDates.replace($data, education.onlineCourses[i].date);
				formattedOnlineURL[i] = HTMLonlineURL.replaceAll($data, education.onlineCourses[i].url);
				formattedOnlineCourse[i] = formattedOnlineTitle[i] + formattedOnlineSchool[i] + formattedOnlineDates[i] +
					formattedOnlineURL[i];
				formattedOnlineCourses += formattedOnlineCourse[i];
			}
			return formattedOnlineCourses;
		} else return "****";
	};


	$("#education").append(HTMLschoolStart);
	$(".education-entry").append(formattedSchoolsList);
	$(".education-entry").append(HTMLonlineClasses);
	$(".education-entry").append(formattedCoursesList);
};

//         BIO ***************************************
bio.display = function() {
	var formattedMobile = HTMLmobile.replace($data, bio.contacts[0].mobile),
		formattedContactEmail = HTMLemail.replaceAll($data, bio.contacts[0].email),
		formattedContactTwitter = HTMLtwitter.replaceAll($data, bio.contacts[0].twitter),
		formattedContactGithub = HTMLgithub.replaceAll($data, bio.contacts[0].github),
		formattedContactLocation = HTMLlocation.replace($data, bio.contacts[0].location),
		topContactsList = formattedMobile + formattedContactEmail + formattedContactTwitter +
		formattedContactGithub + formattedContactLocation;
	var formattedRole = HTMLheaderRole.replace($data, bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace($data, bio.name);
	$("#header").prepend(formattedName);

	//         TOP HEADER ***********************

	$("#topContacts").append(topContactsList);
	$("#footerContacts").append(topContactsList);

	//         HEADER DECK ***********************
	var formattedBioPic = HTMLbioPic.replace($data, bio.biopic),
		formattedWelcome = HTMLwelcomeMsg.replace($data, bio.welcomeMessage),
		formattedSkills = "",
		headerDeck = formattedBioPic + formattedWelcome + HTMLskillsStart;

	var formattedSkillsList = function() {
		if (bio.skills.length > 0) {
			for (var i = 0; i < bio.skills.length; i++) {
				formattedSkills += HTMLskills.replace($data, bio.skills[i]);
			}
			return formattedSkills;
		} else return "****";
	};
	$("#header").append(headerDeck);
	$("#skills").append(formattedSkillsList);
}

//        END DISPLAY FUNCTIONS ******************************************



//         PIECE RESUME TOGETHER ***************************************
bio.display();
work.display();
projects.display();
education.display();

//         MAP ***********************
$("#mapDiv").append(googleMap);



// JOYRIDE SCRIPT ************************
$(window).load(function() {
	$("#resume-tour").joyride({
		'tipLocation': 'bottom',
		'cookieMonster': false,
		'scrollSpeed': 300
	});
});