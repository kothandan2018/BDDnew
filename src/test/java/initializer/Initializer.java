package initializer;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Initializer {

 public static WebDriver wd=null;
 public static FileInputStream locatorFis=null;
 public static Properties locatorProp=null;
 public static FileInputStream urlFis=null;
 public static Properties urlProp=null;
 public static void initialize(String browser) throws IOException{
	
	locatorFis=new FileInputStream(new File("D:\\SeleniumWorkSpace\\Batch38\\BDDNew\\src\\test\\resources\\Config\\locator.properties"));
	locatorProp=new Properties();
	locatorProp.load(locatorFis);
	
	urlFis=new FileInputStream(new File("D:\\SeleniumWorkSpace\\Batch38\\BDDNew\\src\\test\\resources\\Config\\environment.properties"));
	urlProp=new Properties();
	urlProp.load(urlFis);
	
	if(wd==null){
	if(browser.equals("firefox")){
	wd=new FirefoxDriver();
	}else if(browser.equals("chrome")){
		
	}else if(browser.equals("ie")){
		
	}
	}
	wd.manage().window().maximize();
	
}
public static WebElement getWebelementByXpath(String xpath){
	return wd.findElement(By.xpath(locatorProp.getProperty(xpath)));
	
}
}
