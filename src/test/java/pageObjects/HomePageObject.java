package pageObjects;

import org.openqa.selenium.WebElement;

import initializer.DriverFunctions;
import initializer.Initializer;

public class HomePageObject extends Initializer{
public static void enterUserName(String uname){
	getWebelementByXpath("HOMEPAGE_TYPE_USERNAME_XPATH").sendKeys(uname);
}
public static void enterMobileNo(String mobno){
	getWebelementByXpath("HOMEPAGE_TYPE_MOBILENO_XPATH").sendKeys(mobno);
}
public static void enterPicAdd(String pickup){
	getWebelementByXpath("HOMEPAGE_TYPE_PICKUP_XPATH").sendKeys(pickup);
}
public static void enterDropAdd(String drop){
	getWebelementByXpath("HOMEPAGE_TYPE_DROP_XPATH").sendKeys(drop);
}
public static void selectCar(String car){
	WebElement element=getWebelementByXpath("HOMEPAGE_SELECT_CAR_XPATH");
	DriverFunctions.selectDropDownByVisibleText(element, car);
}
public static void clickBookLater(){
	getWebelementByXpath("HOMEPAGE_CLICK_BOOKLATER_XPATH").click();
}
public static void clickBook(){
	getWebelementByXpath("HOMEPAGE_CLICK_BOOK_XPATH").click();
}

}
