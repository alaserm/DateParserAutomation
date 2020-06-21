//dateParserPage.js

//Encapsulates page objects of dateParserPage
var dateParserPage =
{
	//Format
	//<object name>: selectorAndDescription("<type selector>", "<user friendly field description for reports>"),
	url: "https://vast-dawn-73245.herokuapp.com/",
	
	date: selectorAndDescription("input[name=date]", "Date field"),
	submitButton: selectorAndDescription("input[type=submit]", "Submit button"),
	vMessage: selectorAndDescription("//h3[text()='Results']/following-sibling::div", "Result area"),

}
