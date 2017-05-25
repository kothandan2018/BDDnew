package testCases;

import java.io.IOException;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import initializer.DriverFunctions;
import initializer.Initializer;
import pageObjects.HomePageObject;

public class HomePageTest extends Initializer{
	@Given ("^Open Browser as (.*)$")
	public static void openbrowser(String brows) throws IOException {
		initialize(brows);
	}
	@When ("^Load the url as (.*)$")
	public static void loadurl(String url){
		DriverFunctions.loadUrl(url);
	}
	@Then ("^Enter the username as (.*)$")
	public static void enterusername(String uname){
		HomePageObject.enterUserName(uname);
	}
	@And ("^Enter the mobileno as (.*)$")
	public static void entermobileno(String mobno){
		HomePageObject.enterMobileNo(mobno);
	}
	@And ("^Enter the pickup as (.*)$")
	public static void enterpickup(String pickup){
		HomePageObject.enterPicAdd(pickup);
	}
	@And ("^Enter the drop as (.*)$")
	public static void enterdrop(String drop){
		HomePageObject.enterDropAdd(drop);
	}
	@Then ("^Select the cartype as (.*)$")
	public static void selectcar(String car){
		HomePageObject.selectCar(car);
	}
	@And ("^Click booklater$")
	public static void clickbooklater(){
		HomePageObject.clickBookLater();
	}
	@But ("^Don't click book button$")
	public static void clickbook(){
		HomePageObject.clickBook();
	}
}
