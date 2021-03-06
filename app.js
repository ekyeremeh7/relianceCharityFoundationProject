const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

// MEMBERS INFO
const founderInfo = "Osei Eric Owiredu is the Founder and Executive Director of Reliance Charity Foundation. He is a man who transforms houses into homes through the Gospel of Christ.Campus Director for Hult Foundation / United Nations program for tertiary students. He believes in the dreams and potentials of every child and youth and feeds parent on the truth about parenting for a glorious community building. Eric is a Christian, advisor, teacher, life coach, community developer, philanthropist and a research assistant in El-parah Consult Limited. He is currently a student of Accra Technical University pursuing Marketing and Management Studies. Eric is versatile, deligent, humble, highly committed to his work and aims to restore the hope of the vulnerable, make life better for others and eradicate poverty in Africa.";
const generalSecretaryInfo = "Esther Safoa Opoku is a Political Science student of the University of Ghana. She is an entrepreneur and currently a big sky sister at Alogboshie Basic Two. Safoa is an avid reader and loves to write as well. She has great interest in impacting knowledge into the younger ones in the society ";
const proInfo = "Mensah Stephen,A current student of the University of Ghana reading Psychology and Information Technology.Love to work and inspire. The Chief Executive Officer of Stehve Khay Multimeida and the head of Organizing of the Graceful Youth Ministry. Compassionate and loves to invent. Holds a position as the P.R.O for Reliance Charity Foundation.";
const organizerInfo = "Johnson Emmanuel Egyire a Medical Student of Pentecost University, majoring in Physician Assistanship. He is a versatile person with numerous traits in fine arts, music, poetry. He is the CEO of Jhealth EfCare, a humanitarian organization which seeks to helping deprived areas with intensive healthcare and its related initiatives. He is also the lyrics techniques and video analyst instructor for Yadah Music Ministry. Johnson is an extremist,loves to empower people through arts,music, poetry and writing in general.";
const directorInfo = "Ps. Richard Assiwu held his Senior High School from Prempeh College, Kumasi. He later held his bachelor degree in Accounting audit and analysis from the Novgorod State University, Russia. He furthured with his masters degree in Business Administration in Accounting and Finance from the University of Professional Studies, Accra-Ghana. He held a lot of Christian leadership positions during his days of studies. He is currently serving as a Pastor at House of Peace Ministry, Accra Ghana and also a Director for Reliance Charity Foundation. Richard is passionate about transforming lives especially the youth and the less privileged through the preaching of the gospel with the help of the Holy Ghost, counseling and provision of basic material needs of the less privileged in society.";
const headOfLogisticsInfo = "Arthur William, A creative Director and an Entrepreneur as well. He is currently the Chief Executive Officer of the Citizens Groups of Company, a private Company which specialize in Graphic Designing and Printing as well as Bulk Distribution of Grocery Products and Advertisement. He has five years Experience in the Printing and designing Firm. William has been a fitness model for two Modeling houses and has featured in many photoshoot. He is photogenic and personal trainer for Alil Gym and Fitness Center. He is the Executive Board Chairperson of the Event and Media Committee for ICGC Glorious Tabernacle. Arthur William is a good reader and a writer, loves athletics and music. He is a versatile Event Organizer and loves to empower the youth, especially in Art and Design.";
const headOfMediaAndPublicityInfo = "De-Graft Amihere widely known as Degraft Daniels is a young talented entrepreneur and functions as the creative director for the Fashion label 'Dgraft Daniels'. Works at Global Ovations as a Marketing Executive and an event producer. Produced events like the Mercedes Benz Fashion Week Accra/Global Fashion week, Women's Choice Awards Africa and IAFE. De-Graft Amihere is a student, a team player, lover of art.";
const treasurerInfo = "Janet Quarshie, A political science student and information studies student of the university of Ghana. She is a supervisor in a research market firm called Elparah Consult and a Treasurer for Reliance Charity Foundation. She has seven years experience of market research.Jane is a music lover and lively person. She is an advisor to many, multifaceted and loves to empower the youth to come out with their best.";
const welfareOfficerInfo = "Nimarko Bernice Afrima, A student of University of Professional Studies(UPSA) reading Business Administration. She is a good reader and loves music. Nimarko Bernice Afrima is good at keeping healthy relationship and bringing out the best in people, motivating people is one of the things she does.";
const financialSecretaryInfo = "Kwakye-Fianko Andrew a student of Accra Technical University pursuing Accounting. Andy is a self motivated person who aims to help change lives positively by impacting the society. He is God fearing, honest, discipline and a music lover.";
const patronInfo = "Mr. Osei-Nyamekye is a Planning & Social Development advocate.Formal CEO of Cypress Communications-Ghana. Media Expert. External lecturer at African Leadership International. Theologian & Leadership lecturer. Business incubator and social entrepreneurship coach. Campus Director for Hult Foundation and a member of African Association of Ordained Christian Ministers (AAOCM)."
const samuelInfo = "Osei Kwame Samuel is a student of the Kwame Nkrumah University of Science And Technology. He offers Bsc. Computer Science and is currently in his final year of study. He is also a member of the Computer Science Association of Ghana. He is a result-driven and detail-oriented individual capable of aiding in the management of technical support operations, as well as introducing new ideas to promote operational efficiency.";
const owusuahAgyepongInfo = " Owusuah Agyepong , A past student of Achimota College and Pharmatrust Professional College. She is currently the CEO of Cici's cosmetics. Owusuah has a heart of gold and her love for humanity is one in a million. She believes that, every child should be allowed to have access to good health and education no matter the tribe affiliation and cultural identity.";
const promiseKateyInfo = "Promise Katey is a Public Relations student in the Accra Technical University. He has the love for the humanity and always  wants to see people in shape and form. He is currently the youth Vice President of Redeemers Church.";
const amoahMercyInfo = " Amoah Mercy, the CEO of 'Olokos's closet'. She is an affable young lady who believes a future should be found in a safe home or classroom than the street. She is industrious , hardworking and obedient. ";
const obengPatrickInfo = "Obeng-Tawiah Patrick, a Financial Accounting student of Accra Technical University as well as a business consultant at Wilpamo Ventures and a Personal Assistant to the CEO of Wilpamo Ventures. Patrick is also a Sales personnel at Kok's Consult."

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home", {
        founderContent: founderInfo,
        secretaryContent: generalSecretaryInfo,
        proContent: proInfo,
        organizerContent: organizerInfo,
        directorContent: directorInfo,
        headOfLogisticsContent: headOfLogisticsInfo,
        headOfMediaAndPublicityContent: headOfMediaAndPublicityInfo,
        treasurerContent: treasurerInfo,
        welfareOfficerContent: welfareOfficerInfo,
        financialSecretaryContent: financialSecretaryInfo,
        patronContent: patronInfo,
        samuelContent: samuelInfo,
        owusuahAgyepongContent: owusuahAgyepongInfo,
        promiseKateyContent: promiseKateyInfo,
        amoahMercyContent: amoahMercyInfo,
        obengPatrickContent: obengPatrickInfo,

    });
});

app.get("/members/founder", function(req, res) {
    res.render("founder", {
        founderContent: founderInfo
    });
});


app.get("/members/generalSecretary", function(req, res) {
    res.render("generalSecretary", {
        secretaryContent: generalSecretaryInfo
    });
});

app.get("/members/pro", function(req, res) {
    res.render("pro", {
        proContent: proInfo
    });
});

app.get("/members/organizer", function(req, res) {
    res.render("organizer", {
        organizerContent: organizerInfo
    });
});

app.get("/members/director", function(req, res) {
    res.render("director", {
        directorContent: directorInfo
    });
});

app.get("/members/logistics", function(req, res) {
    res.render("logistics", {
        headOfLogisticsContent: headOfLogisticsInfo

    });
});

app.get("/members/headOfMediaAndPublicity", function(req, res) {
    res.render("headOfMediaAndPublicity", {
        headOfMediaAndPublicityContent: headOfMediaAndPublicityInfo

    });
});

app.get("/members/treasurer", function(req, res) {
    res.render("treasurer", {
        treasurerContent: treasurerInfo
    });
});

app.get("/members/welfareOfficer", function(req, res) {
    res.render("welfareOfficer", {
        welfareOfficerContent: welfareOfficerInfo
    });


});

app.get("/members/financialSecretary", function(req, res) {
    res.render("financialSecretary", {
        financialSecretaryContent: financialSecretaryInfo
    })
});

app.get("/members/patron", function(req, res) {
    res.render("patron", {
        patronContent: patronInfo
    })
});

app.get("/members/samuel", function(req, res) {
    res.render("samuel", {
        samuelContent: samuelInfo
    })
});


app.get("/members/promiseKatey", function(req, res) {
    res.render("promiseKatey", {
        promiseKateyContent: promiseKateyInfo
    })
});

app.get("/members/owusuahAgyepong", function(req, res) {
    res.render("owusuahAgyepong", {
        owusuahAgyepongContent: owusuahAgyepongInfo
    })
});

app.get("/members/amoahMercy", function(req, res) {
    res.render("amoahMercy", {
        amoahMercyContent: amoahMercyInfo
    })
});

app.get("/members/obengPatrick", function(req, res) {
    res.render("obengPatrick", {
        obengPatrickContent: obengPatrickInfo
    });
});


app.get("/donateUs", function(req, res) {
    res.render("donateUs");
});

app.get("/thanksmessage", function(req, res) {
    res.render("thanksmessage");
});

app.get("/gallery/OCT-2020", function(req, res) {
    res.render("gallery/OCT-2020");
});


app.get("/gallery/DEC-2020", function(req, res) {
    res.render("gallery/DEC-2020");
});


let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function() {
    console.log("Server is running on Port 3000");
});