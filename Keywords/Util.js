
//Util.js encapsulates useful common keywords like Util.startLocalWebBrowser

var Util = {};


//Util.startLocalWebBrowser = function(params) {
//
//    reportStep("Start local browser "+params.get("browser") );
//    
//    if(params.get("browser") == "Chrome")
//        driver =new ChromeDriver;
//    else
//    if(params.get("browser") == "Firefox")    
//        driver =new FirefoxDriver;
//    else
//        throw "Unsupported Parameter: " + params.get("browser") ;
//
//        
//}

Util.startWebBrowser = function(params) {

    reportStep("Starting browser: "+ com.andreim.visualtaf.App.browserType );

//    if(params.get("browser") == "LocalFirefox")
//	{
//		java.lang.System.setProperty("webdriver.firefox.marionette","geckodriver.exe");
//       driver =new FirefoxDriver;
//	}
    
    if(App.browserType == "Local Chrome")
	{
        driver =new ChromeDriver;
	}
    else
    {
		//dc = DesiredCapabilities.firefox();
		dc=new DesiredCapabilities();
		//dc.setVersion("8");
		dc.setBrowserName(com.andreim.visualtaf.App.browserName );
		switch(App.browserPlatform)
		{
			case "Windows":
				dc.setPlatform(Platform.WINDOWS); break;		
			case "Linux":
				dc.setPlatform(Platform.LINUX); break;		
			case "MacOS":
				dc.setPlatform(Platform.MAC); break;		
				
				
		}	
		driver = new RemoteWebDriver(new java.net.URL(App.seleniumHub),dc);
	}
}


Util.closeWebBrowser = function() {

    reportStep("Close browser")
    if( driver )
    {	
      driver.quit();
      driver=null;
    }  
		  
}

Util.debug = function() {

    debug();

}

Util.verifyDropdown = function(params) {
	navigate("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select");
	
	//driver.switchTo().frame("iframeResult");
	//driver.switchTo().frame(0);
	switchToIframe("iframeResult");
	
	//assertObjectValue( selectorAndDescription("select","Car Dropdown"), "Saab");
	
	assertDropdownContent( selectorAndDescription("select","Car Dropdown"), params.get("dropdownContent") );
	
	//driver.switchTo().defaultContent();
	switchBackToDefaultContent();
	
	//findObject( selectorAndDescription("div#textarea","") );
	//debug();
	//findObject( By.cssSelector("div#textarea") );
}

//waitForObjectToBecomeInvisible(selectorAndDescription("#spinner", "spinner image") );
//waitForObjectText(selectorAndDescription("#loadingelement", "Loading div element"), "Loaded" );

function getCurrentPageId() {
	
	return findObject(css("html")).id;
}

function waitForPageChange(oldPageId) {
	
	while( findObject(css("html")).id == oldPageId)
	{
		sleep(200);
	}
	
	waitForAngularJQueryJS();
}

