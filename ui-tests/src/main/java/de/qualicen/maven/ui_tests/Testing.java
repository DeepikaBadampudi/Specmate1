package de.qualicen.maven.ui_tests;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import SpecmatePageClasses.LoginElements;


import java.net.MalformedURLException;
import java.net.URL;


import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

 
    
//TestClass
public class Testing {
	
	  public static final String USERNAME = System.getenv("SAUCE_USERNAME");
	  public static final String ACCESS_KEY = System.getenv("SAUCE_ACCESS_KEY");
	  public static final String URL = "https://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:443/wd/hub";
	  public static final String TUNNELIDENTFIER = System.getenv("TRAVIS_JOB_NUMBER");
	
	public static void main(String[] args) throws InterruptedException, MalformedURLException {
		
		DesiredCapabilities caps = DesiredCapabilities.chrome();
	    caps.setCapability("platform", "Windows 10");
	    caps.setCapability("version", "latest");
	    caps.setCapability("tunnel-identifier", TUNNELIDENTFIER);
	 
	    WebDriver driver = new RemoteWebDriver(new URL(URL), caps);

		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS); //page synchronization
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.get("http://localhost:8080/");
		
		LoginElements login = new LoginElements(driver); //creating object of class LoginElements
		
		//method calls
		login.username("username");
		login.password("password");
		login.changeToEnglish();
		login.changeToGerman();
		login.changeToProject("test-data");
		login.login();
		
		//close browser
		//driver.close();
		driver.quit();
	}
	
}

