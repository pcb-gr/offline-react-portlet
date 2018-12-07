<link rel="stylesheet" href="https://github.hubspot.com/offline/themes/offline-theme-chrome-indicator.css">

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %><%@
taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %><%@
taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %><%@
taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>

<%@ page import="com.liferay.npm.react.constants.OfflineReactWebKeys" %>

<liferay-theme:defineObjects />

<portlet:defineObjects />
<%
String bootstrapRequire = (String)renderRequest.getAttribute(OfflineReactWebKeys.BOOTSTRAP_REQUIRE);
%>
