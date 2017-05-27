package initializer;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class DriverFunctions extends Initializer{
public static void selectDropDownByVisibleText(WebElement element, String car){
	Select s=new Select(element);
	s.selectByVisibleText(car);
}
public static void loadUrl(String url){
	wd.get(urlProp.getProperty(url));
}
}
