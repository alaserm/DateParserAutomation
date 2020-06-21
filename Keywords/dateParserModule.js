//dateParserModule.js
//encapsulates all actions related to dateParserModule
var dateParserModule = {};

dateParserModule.navigate = function(params) {
	
	navigate(dateParserPage.url);
}

dateParserModule.fillForm = function(params) {

    
 	
	typeText(dateParserPage.date, params.get('date') );

    var oldPageId = getCurrentPageId();
    click(dateParserPage.submitButton);

    waitForPageChange(oldPageId);	
	
}

dateParserModule.verifyResult = function(params) {
	
	assertObjectText(dateParserPage.vMessage, params.get('vMessage') );

}
