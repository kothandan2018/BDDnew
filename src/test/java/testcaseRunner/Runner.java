package testcaseRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(tags="@HomePage", format={"pretty", "html:reports"}, features="D:\\SeleniumWorkSpace\\Batch38\\BDDNew\\src\\test\\resources\\FeatureFile", glue="testCases")

public class Runner {

}
