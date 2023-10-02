import Render from "./render.js";

const CLASSES = {
	rulesContainer: "rules",
	faqsContainer: "faqs",
	registerContainer: "register",
	structureContainer: "structure",
	problemStatementsContainer: "problem-statements",
	glitchContainer: "glitch",
	glitchItem: "glitch__item",
	glitchTitle: "glitch__title",
};
const displayRules = (rules) => {
	const rulesContainer = document.querySelector("." + CLASSES.rulesContainer);
	console.log("rulesContainer :>> ", rulesContainer);
	const rulesList = Render.component("ol");
	rules.forEach((rule) => {
		rulesList.append(Render.component("li", { innerText: rule }));
	});
	const rulesHeader = Render.component("h3", { innerText: "Rules", className: "title-text" });
	rulesContainer.append(rulesHeader);
	rulesContainer.append(rulesList);
};
const displayFaqs = (faqs) => {
	const faqsContainer = document.querySelector("." + CLASSES.faqsContainer);
	const faqsList = Render.component("ol");
	faqs.forEach((faq) => {
		faqsList.append(Render.component("li", { innerText: faq }));
	});
	const faqsHeader = Render.component("h3", { innerText: "FAQ'S", className: "title-text" });
	faqsContainer.append(faqsHeader);
	faqsContainer.append(faqsList);
};
const displayStructure = (structure) => {
	const structureContainer = document.querySelector(
		"." + CLASSES.structureContainer
	);
	const structureHeader = Render.component("p", { innerText: "Structure", className: 'struct structure-header' });
	structureContainer.append(structureHeader);
	const className = "struct structure-round";
	for (const round in structure) {
		const text = round + ": " + structure[round];
		const item = Render.component("p", { innerText: text });
		structureContainer.append(item);
		item.className = className;
	}
};
const displayProblemStatements = (problemStatements) => {
	const problemStatementsContainer = document.querySelector(
		"." + CLASSES.problemStatementsContainer
	);
	const getGlitchItems = (count = 5) => {
		return new Array(count)
			.fill(0)
			.map(() => Render.div([], { className: CLASSES.glitchItem }));
	};
	const getProblemContainer = (problem) => {
		return Render.component("p", {
			className: CLASSES.glitchTitle,
			innerText: problem,
		});
	};
	if (!problemStatements.length) {
		const glitchContainer = Render.div(getGlitchItems(), {
			className: CLASSES.glitchContainer,
		});
		const problem = getProblemContainer(
			"PROBLEM STATEMENTS RELEASING SOON"
		);

		glitchContainer.append(problem);
		problemStatementsContainer.append(glitchContainer);
		return;
	}

	for (const stmt of problemStatements) {
		const glitchItems = getGlitchItems();

		const glitchContainer = Render.div(glitchItems, {
			className: CLASSES.glitchContainer,
		});
		const problem = getProblemContainer(stmt);

		glitchContainer.append(problem);
		problemStatementsContainer.append(glitchContainer);
	}
};
const displayLoadedData = (data) => {
	const { rules, faqs, structure, problemStatements } = data;
	displayRules(rules);
	displayFaqs(faqs);
	displayStructure(structure);
	displayProblemStatements(problemStatements);
};
document.body.onload = (async function () {
	const promise = await fetch("data.json");
	const data = await promise.json();
	console.log("data :>> ", data);
	displayLoadedData(data);
})();

