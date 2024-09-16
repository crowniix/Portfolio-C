import { useRouter } from "next/router";

function NoName() {
    const router = useRouter();
    const { locale } = router;
    const skillsFR = [
        {
            title: "Certification & Formation RGPD (Délégué à la Protection des Données)",
            subTitle: {
                text: "",
                link: "",
            },
            place: "PECB",
            date: "Aout 2024",
            listTitle: "Acquis :",
            listItems: [
                "Connaissance approfondie du RGPD, y compris ses principes, ses obligations et ses impacts sur les organisations ; ",
                "Maîtrise des rôles et responsabilités d’un Délégué à la Protection des Données (DPO) ;",
                "identification et la gestion des risques liés à l'impact des données personnelles (AIPD) ;",
                "Sensibilisation et formation des équipes au RGPD et aux bonnes pratiques de gestion des données personnelles ;",
                "Rédaction de rapports de conformité et recommandations pour améliorer les pratiques de gestion des données personnelles.",
            ],
            
        },
        {
            title: "Certification & Formation ISO-27005 & EBIOS Risk Manager",
            subTitle: {
                text: "",
                link: "",
            },
            place: "PECB",
            date: "Avril 2024",
            listTitle: "Acquis :",
            listItems: [
                "Maîtrise des exigences, des principes et des processus de la norme ISO 27005 pour la gestion des risques SI; ",
                "Identification, évaluation et gestion des risques à la sécurité de l'information avec la méthodologies EBIOS RM ;",
                "Cartographier les risques, évaluation de la criticité et suivis de l'évolution en continue ;",
                "Développement de plans de traitement des risques et définition de mesures correctives pour améliorer du SI;",
                "Élaboration de politiques et procédures de gestion des risques, alignées sur les exigences des normes ISO ;",
            ],
            
        },
        {
            title: "Certification & Formation Cloud Associate & Junior Penetration Tester",
            subTitle: {
                text: "",
                link: "",
            },
            place: "INE",
            date: "Avril 2023",
            listTitle: "Acquis :",
            listItems: [
                "Compréhension des services cloud & des fournisseurs cloud,  tels AWS, Microsoft Azure, Google Cloud Platform (GCP) ;",
                "Sécurité cloud, y compris IAM, surveillance, gestion des PKI, conformité aux réglementations ;",
                "Capable de rechercher des vulnérabilités dans les systèmes, les réseaux et les applications pour identifier les points faibles de sécurité ;",
                "Exploiter les vulnérabilités découvertes pour permettre un accès non autorisé à un système ou une application ;",
                "Capable de documenter vos découvertes et vos activités d'audit de manière claire et précise dans des rapports d'audit ;",
                "Compréhension des lois et des réglementations en matière de tests d'intrusion éthiques et respect des périmetres exigés ;",
            ],
           
        },
        {
            title: "Certification & Formation ISO-27001 Foundation, Lead Implementer & Auditor",
            subTitle: {
                text: "",
                link: "",
            },
            place: "PECB",
            date: "Avril 2023",
            listTitle: "Acquis :",
            listItems: [
                "Connaissance approfondie de la norme ISO 27001, y compris ses exigences, ses principes et ses processus ; ",
                "Identification, évaluation et gestion des risques liés à la sécurité de l'information au sein d'une organisation ;",
                "Conception et mise en place de politiques et de procédures de sécurité conformes à la norme ISO-27001  ;",
                "Développement de plans de traitement des risques et définition de mesures correctives pour améliorer du SI ;",
                "Rédaction rapports de conformité, incluant la présentation de solutions pour combler les écarts identifiés.",
            ],
            
        },
        {
            title: "Master en Fiabilité et sécurité informatique",
            subTitle: {
                text: "Labellisé ",
                link: { text: "SecNumEdu (ANSSI).", href: "/" },
            },
            place: "Aix-Marseille Université",
            date: "2021-2023",
            listTitle: "Acquis :",
            listItems: [
                "Cryptographie (Chiffrement symétrique & asymétrique, Hybride, AES, RSA, DSA, Java Cryptography Extension) ;",
                "Sécurité internet & réseaux ;",
                "Politiques et modèles de contrôle d'accès ;",
                "Systèmes d'information d'entreprise ;",
                "Sécurité fonctionnelle et qualité ;",
                "Sécurité logicielle pour systèmes embarqués."
            ],
        },
        {
            title: "Licence Génerale en Informatique",
            subTitle: {
                text: "",
                link: "",
            },
            place: "Aix-Marseille Université",
            date: "2018-2021",
            listTitle: "Acquis :",
            listItems: [
                "Algorithmes (Complexité, Tri, Graphe, Réseaux)",
                "Programmation (C , Java, Shell, MERN STACK, Web)",
                "Langages formels ● Architecture des ordinateurs (Mips, X86)",
                "Architecture des ordinateurs (Mips, X86, Circuits)",
                "Systèmes d'exploitation (Linux, Windows, Gestion de Memoire et Fichier)",
                "Administration Réseaux (Model OSI, Cisco, Programmation Socket)",
                "Théorie des graphes."
            ],
        },
        {
            title: "Ingénieur et consultant en Cybersécurité",
            subTitle: {
                text: "",
                link:"",
            },
            place: "Global Partner",
            date: "Janvier 2024 - Septembre 2024",
            listTitle: "Missions :",
            listItems: [
                "Évaluation de l'état actuel de la sécurité de l'information à travers un audit initial pour identifier les écarts par rapport aux exigences de l'ISO 27001.",
                "Élaboration des processus métiers et des processus de support suivant la norme ISO-9001 pour définir le périmètre du SMSI",
                "Implémentation du référenciel du Système de Management de la Sécurité de l'Informations au sein de Global Partner",
                "Appréciation et Traitement des risques suivant la norme ISO-27005",
                "Audit technique pour identifier les vulnérabilités dans les système d'information de l'entreprise.",
                "Formation et sensibilisation du personnel aux politiques et procédures de sécurité de l'information."
            ],
        },
        {
            title: "Consultant Gouvernance, Gestion de risques et Conformité & Testeur d'Intrusion",
            subTitle: {
                text: "",
                link:"",
            },
            place: "Freelance",
            date: "2021 - Aujourd'hui",
            listTitle: "Missions :",
            listItems: [
                "Evaluation des besoins spécifiques en matière de gouvernance, de gestion des risques et de conformité.",
                "Mise en conformité réglementaire des clients, telles que le RGPD, PCI-DSS- ISO-27001.",
                "Évaluation de la conformité avec audits de conformité pour vérifier que les politiques et les procédures sont respectées.",
                "Tests d'intrusion pour identifier les vulnérabilités et les faiblesses de la sécurité dans les système d'information de l'entreprise.",
                "Fournir des conseils sur la manière de renforcer la sécurité des systèmes et des applications.",
                "Formations des employés et des parties prenantes aux politiques, aux procédures de sécurité de l'information et à la conformité."
            ],
        },
        {
            title: "Membre expert Ebios Risk Manager",
            subTitle: {
                text: "",
                link: "",
            },
            place: "Club Ebios Risk Manager",
            date: "Avril 2023 - Aujourd'hui",
            listTitle: "Missions :",
            listItems: [
                "Collaboration sur des projets et des initiatives liés à la gestion des risques basée sur le referenciel ISO-27005.",
                "Contribution aux initiatives de l’ANSSI en participant à des groupes de travail pour l'amélioration continue de la méthode.",
                "Modélisation des risques et des scénarios d'incidents de sécurité.",
                "Conseil en gestion des risques aux clients pour une gestion efficace de leurs risques en matière de sécurité de l'information.",
                "Formation des équipes de sécurité et les parties prenantes à l'utilisation de la méthodes Ebios Risk Manager."
            ],
        },
        {
            title: "Appui Responsable de la sécurité des Systèmes d'informations (RSSI)",
            subTitle: {
                text: "",
                link:"",
            },
            place: "Webhelp Group & Concentrix",
            date: "Avril 2023 - Septembre 2023",
            listTitle: "Missions :",
            listItems: [
                "Collaboration à l'élaboration de politiques de sécurité, de normes et de procédures pour garantir la conformité de sécurité.",
                "Aide à la réalisation et la gestion des audits de vulnérabilité de sécurité internes ou externes.",
                "Mise en place de la méthode EBIOS RM.",
                "Coordination avec les équipes de sécurité pour mettre en œuvre des contrôles de sécurité et répondre aux incidents.",
                "Contribuer à l'évaluation régulière de la posture de sécurité de l'organisation et à l'amélioration continue des pratiques de sécurité."
            ],
           
        },
        {
            title: "Consultant Cybersécurité",
            subTitle: {
                text: "",
                link:"",
            },
            place: "Stage - Aix-Marseille Université",
            date: "Avril 2022 - Juin 2022",
            listTitle: "Missions :",
            listItems: [
                "Conception et développement d’un outil d’évaluation de la maturité de la sécurité d’un système d’information.",
                "Application de l’outil sur les normes et référentiels de sécurité (ISO 27001, NIST, CIS).",
            ],
        },
        {
            title: "Developpment Web Full Stack (Laravel & Symphony)",
            subTitle: {
                text: "",
                link: "",
            },
            place: "Stage - Bureau de certification Internationale France (BCIFrance)",
            date: "Avril 2021 - Juin 2021",
            listTitle: "Missions :",
            listItems: [
                "Conception, création et déploiement d'un site Web vitrine responsive (Front End, Back End). 'www.bcifrance.fr '",
                "Développement d'un outil de gestion et de génération de contrats de certification en PDF à partir de données client.",
                "Natural referencing • SEO Social networks",
            ],
        },
        {
            title: "Développement Web Full-Stack (PHP, Symphony, MySQL , HTML/CSS , Javascript, MERN STACK) ",
            subTitle: {
                text: "",
                link: "",
            },
            place: "Freelance",
            date: "2018-2021",
            listTitle: "Missions :",
            listItems: [
                "Conception Web.",
                "Developpment (Front End, Back End).",
                "Management de projets.",
                "Natural referencing • SEO Social networks.",
                "Gestion de qualité & des tests (unitaire, fonctionnelle)",
                "Conception et gestion de bases de données (SQL ou NoSQL)",

            ],
        },
    ];

    const skillsEN = [
        {
            title: "Certification & Training GDPR (Data Protection Officer)",
            subTitle: {
                text: "",
                link: "",
            },
            place: "PECB",
            date: "Aout 2024",
            listTitle: "Skills Acquired:",
            listItems: [
                "Thorough knowledge of GDPR, including its principles, obligations, and impact on organizations ; ",
                "Mastery of the roles and responsibilities of a Data Protection Officer (DPO) ;",
                "Identification and management of risks related to data protection impact assessments (DPIA) ;",
                "Awareness and training of teams on GDPR and best practices for managing personal data ;",
                "Drafting compliance reports and providing recommendations to improve personal data management practices.",
            ],
        },        
        {
            title: "Certification & Training ISO-27005 & EBIOS Risk Manager",
            subTitle: {
                text: "",
                link: "",
            },
            place: "PECB",
            date: "Avril 2024",
            listTitle: "Skills Acquired:",
            listItems: [
                "Mastery of the requirements, principles, and processes of the ISO 27005 standard for information security risk management ; ",
                "Identification, evaluation, and management of information security risks using the EBIOS RM methodology ;",
                "Risk mapping, criticality assessment, and continuous monitoring of risk evolution ;",
                "Development of risk treatment plans and definition of corrective measures to improve information security ;",
                "Development of risk management policies and procedures aligned with ISO standards.",
            ],
        },  
        {
            title: "Certification & Training in Cloud Associate & Junior Penetration Tester",
            subTitle: {
                text: "",
                link: "",
            },
            place: "INE",
            date: "April 2023",
            listTitle: "Skills Acquired:",
            listItems: [
                "Understanding of cloud services & cloud providers such as AWS, Microsoft Azure, Google Cloud Platform (GCP);",
                "Cloud security, including IAM, monitoring, PKI management, regulatory compliance;",
                "Capable of searching for vulnerabilities in systems, networks, and applications to identify security weaknesses;",
                "Exploiting discovered vulnerabilities to enable unauthorized access to a system or application;",
                "Capable of documenting discoveries and audit activities clearly and precisely in audit reports;",
                "Understanding of laws and regulations regarding ethical intrusion testing and compliance with required perimeters;",
            ],
        },
        {
            title: "Certification & Training ISO-27001 Foundation, Lead Implementer & Auditor",
            subTitle: {
                text: "",
                link: "",
            },
            place: "PECB",
            date: "April 2023",
            listTitle: "Skills Acquired:",
            listItems: [
                "Thorough knowledge of he ISO 27001 standard, including its requirements, principles, and processes ; ",
                "Identification, evaluation, and management of information security risks within an organization ;",
                "Design and implementation of security policies and procedures in compliance with ISO 27001 standards ;",
                "Development of risk treatment plans and definition of corrective measures to improve information security systems ;",
                "Drafting compliance reports, including presenting solutions to address identified gaps.",
            ],
        },        
        {
            title: "Master's in Reliability and Computer Security",
            subTitle: {
                text: "Accredited ",
                link: { text: "SecNumEdu (ANSSI).", href: "/" },
            },
            place: "Aix-Marseille University",
            date: "2021-2023",
            listTitle: "Acquired Skills:",
            listItems: [
                "Cryptography (Symmetric & asymmetric encryption, Hybrid, AES, RSA, DSA, Java Cryptography Extension);",
                "Internet & network security;",
                "Access control policies and models;",
                "Enterprise information systems;",
                "Functional security and quality;",
                "Software security for embedded systems.",
            ],
        },
        {
            title: "Bachelor's Degree in Computer Science",
            subTitle: {
                text: "",
                link: "",
            },
            place: "Aix-Marseille University",
            date: "2018-2021",
            listTitle: "Acquired Skills:",
            listItems: [
                "Algorithms (Complexity, Sorting, Graphs, Networks)",
                "Programming (C, Java, Shell, MERN STACK, Web)",
                "Formal languages ● Computer architectures (Mips, X86)",
                "Computer architectures (Mips, X86, Circuits)",
                "Operating systems (Linux, Windows, Memory and File Management)",
                "Network administration (OSI Model, Cisco, Socket Programming)",
                "Graph theory.",
            ],
        },
        {
            title: "Cybersecurity Engineer and Consultant",
            subTitle: {
                text: "",
                link: "",
            },
            place: "Global Partner",
            date: "January 2024 - September 2024",
            listTitle: "Missions:",
            listItems: [
                "Assessment of the current state of information security through an initial audit to identify gaps in relation to ISO 27001 requirements.",
                "Development of business and support processes in line with ISO-9001 to define the scope of the ISMS.",
                "Implementation of the Information Security Management System (ISMS) framework within Global Partner.",
                "Risk assessment and treatment following the ISO-27005 standard.",
                "Technical audit to identify vulnerabilities in the company's information systems.",
                "Training and awareness programs for staff on information security policies and procedures.",
            ],
        },
        {
            title: "Governance, Risk Management & Compliance Consultant & Intrusion Tester",
            subTitle: {
                text: "",
                link: "",
            },
            place: "Freelance",
            date: "2021 - Present",
            listTitle: "Missions:",
            listItems: [
                "Evaluation of specific needs in governance, risk management, and compliance.",
                "Regulatory compliance for clients, such as GDPR, PCI-DSS-ISO-27001.",
                "Compliance evaluation with compliance audits to verify that policies and procedures are followed.",
                "Intrusion testing to identify vulnerabilities and security weaknesses in the company's information systems.",
                "Providing advice on strengthening system and application security.",
                "Training employees and stakeholders on information security policies, procedures, and compliance.",
            ],
        },
        {
            title: "Expert Member in Ebios Risk Manager",
            subTitle: {
                text: "",
                link: "",
            },
            place: "Ebios Risk Manager Club",
            date: "April 2023 - Present",
            listTitle: "Missions:",
            listItems: [
                "Collaboration on projects and initiatives related to risk management based on the ISO-27005 framework.",
                "Contributing to ANSSI initiatives by participating in working groups for continuous improvement of the method.",
                "Risk and security incident scenario modeling.",
                "Risk management consulting to clients for effective information security risk management.",
                "Training security teams and stakeholders on using the Ebios Risk Manager method.",
            ],
        },
        
        {
            title: "Support for Chief Information Security Officer (CISO)",
            subTitle: {
                text: "",
                link:"",
            },
            place: "Webhelp Group & Concentrix",
            date: "April 2023 - September 2023",
            listTitle: "Missions:",
            listItems: [
                "Collaboration in the development of security policies, standards, and procedures to ensure security compliance.",
                "Assisting in the implementation and management of internal or external security vulnerability audits.",
                "Implementation of the EBIOS RM method.",
                "Coordination with security teams to implement security controls and respond to incidents.",
                "Contributing to regular evaluation of the organization's security posture and continuous improvement of security practices.",
            ],
        },
        {
            title: "Cybersecurity Consultant",
            subTitle: {
                text: "",
                link:"",
            },
            place: "Internship - Aix-Marseille University",
            date: "April 2022 - June 2022",
            listTitle: "Missions:",
            listItems: [
                "Designing and developing a tool for assessing the security maturity of an information system.",
                "Application of the tool to security standards and frameworks (ISO 27001, NIST, CIS).",
            ],
        },
        
        {
            title: "Full Stack Web Development (Laravel & Symphony)",
            subTitle: {
                text: "",
                link: "",
            },
            place: "Internship - Bureau de Certification Internationale France (BCIFrance)",
            date: "April 2021 - June 2021",
            listTitle: "Missions:",
            listItems: [
                "Design, creation, and deployment of a responsive showcase website (Front End, Back End). 'www.bcifrance.fr '",
                "Development of a tool for managing and generating certification contracts in PDF from client data.",
                "Natural referencing • SEO Social networks",
            ],
        },
        {
            title: "Full-Stack Web Development (PHP, Symphony, MySQL, HTML/CSS, Javascript, MERN STACK)",
            subTitle: {
                text: "",
                link: "",
            },
            place: "Freelance",
            date: "2018-2021",
            listTitle: "Missions:",
            listItems: [
                "Web design.",
                "Development (Front End, Back End).",
                "Project management.",
                "Natural referencing • SEO Social networks.",
                "Quality management & testing (unitary, functional)",
                "Design and management of databases (SQL or NoSQL)",
            ],
        },
        
    ];
    const skills = locale == "fr" ? skillsFR : skillsEN;
    return (
        <section className="skillz sub-bg section-padding" id="Cv">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-around gap-4">
                    <div className="d-flex flex-column">
                        <h2 className="fs-2xl">{locale == "fr" ? "Parcours Académique" :"Academic background" }</h2>
                        <div className="skill-box-container mt-4 d-flex flex-column gap-4">
                            {
                            skills.slice(0, 6).map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="skill-box wow fadeInUp"
                                    data-wow-delay={`${(idx + 1) / 10}s`}
                                >
                                    <h3 className="fs-xl">{skill.title}</h3>
                                    <div className="d-flex gap-2 fs-sm">
                                        <span>{skill.subTitle.text}</span>
                                        <a href={skill.subTitle.link.href}>
                                            {skill.subTitle.link.text}
                                        </a>
                                    </div>
                                    <h4 className="fs-xl color-font">
                                        {skill.place}
                                    </h4>
                                    <span className="fs-sm color-font py-3">
                                        {skill.date}
                                    </span>
                                    <h5 className="fs-md">
                                        <u>{skill.listTitle}</u>
                                    </h5>
                                    <ul>
                                        {skill.listItems.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <h2 className="fs-2xl">
                        {locale == "fr" ? "Expérience Professionnelle" :"Professional experience" }
                        </h2>
                        <div className="skill-box-container mt-4 d-flex flex-column gap-4">
                            {skills.slice(6, 12).map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="skill-box wow fadeInUp"
                                    data-wow-delay={`${((idx + 1) * 2) / 12}s`}
                                >
                                    <h3 className="fs-xl">{skill.title}</h3>
                                    <div className="d-flex gap-2 fs-sm">
                                        <span>{skill.subTitle.text}</span>
                                        <a href={skill.subTitle.link.href}>
                                            {skill.subTitle.link.text}
                                        </a>
                                    </div>
                                    <h4 className="fs-xl color-font">
                                        {skill.place}
                                    </h4>
                                    <span className="fs-sm color-font py-3">
                                        {skill.date}
                                    </span>
                                    <h5 className="fs-md">
                                        <u>{skill.listTitle}</u>
                                    </h5>
                                    <ul>
                                        {skill.listItems.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NoName;
