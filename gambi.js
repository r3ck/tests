function clickButton() {
    const shadowHost = document.querySelectorAll("#app-root > div > databricks-lakeview")[0];
    const button = shadowHost.shadowRoot.querySelector('button[data-component-id="lakeview-author-dashboard-refresh-button"]');
    
    if (button) {
        button.click();
        console.log('Button clicked!');
    } else {
        console.log('Button not found!');
    }
}

setInterval(clickButton, 60000);