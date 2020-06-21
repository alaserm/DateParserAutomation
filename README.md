# Date Parser Test Automation Scripts

**Requrements**: Windows 7+, Chrome Browser, Excel (optional, not needed for test execution, but needed if you want to view/edit attached Excel files), ExlJS test automation tool (ideal for data-driven automation out of the box, [read about it](https://github.com/alaserm/VisualTAF/blob/master/README.md) )


You can download ExlJS test automation tool bundled with Date Parser test scripts from [here](http://23.236.144.243/VisualTAF/ExlJS-tool-bundled-with-DateParser-test-scriptsl.zip).


**Usage**
1. Download zip file above.
2. Unzip it to some folder.
3. Go to that folder and run ExlJS.exe file, GUI Tool will come up.
4. In GUI interface Tree View expand "Test Sets" folder, you will see test set called "Regression"
5. Right click on "Regression" folder and in context menu select "Run selected Test Set" 
6. In a new Dialog select "Local Chrome" as a browser and select number of threads for parallel execution (parallel execution in this tool can decrease test execution time from hours to minutes!)
7. Click "Start Test Run" button
8. Browser(s) will be started and tests will start executing
9. Once all tests are finished you will see "Finished running test set" dialog, click OK button and it will open 
   comprehensive test execution report in a new Chrome window.



**Notes**

To edit test artifact (test cases, object repo, instructions) right-click on the item and select "Edit/view this asset" option.
Automated Test cases + associated test data contained in Excel files.
To view instruction code from Excel file click on instruction in Keyword column and then press CTRL+SHIFT+G
To quickly navigate to test data, click reference in "Input" column and press CTRL+SHifT+G
