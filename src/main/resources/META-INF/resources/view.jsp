<%@ include file="/init.jsp" %>
<pre style="overflow: hidden;">
    Readme.
    + This is a sample of offline mode react app.
    + The app is available working both online and offline mode.
    + All form data will be auto save to local store per 3 second.
    + To see how data was saved, follow step:
        f12 on browser -> move tab "application" -> click "local store" item on left of tree-view -> click "PORTLET_OFFLINE".
    + To test offline mode, please stop server.
</pre>
<div id="<portlet:namespace />"></div>

<aui:script require="<%= bootstrapRequire %>">
	bootstrapRequire.default('<portlet:namespace />');
</aui:script>