function exploreObject (objExplore) {
    
        logDebug("Methods:")
        for (x in objExplore) {
            if (typeof(objExplore[x]) == "function") {
                logDebug("<font color=blue><u><b>" + x + "</b></u></font> ");
                logDebug("   " + objExplore[x] + "<br>");
            }
        }
    
        logDebug("");
        logDebug("Properties:")
        for (x in objExplore) {
            if (typeof(objExplore[x]) != "function") logDebug("  <b> " + x + ": </b> " + objExplore[x]);
        }
    
    }