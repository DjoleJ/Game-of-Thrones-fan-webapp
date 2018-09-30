<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="urlset">
<html>
	<body>
		<table border="1" align="center">
			<tr>
				<th bgcolor="grey">Loc</th>
				<th bgcolor="red">Lastmod</th>
				<th bgcolor="red">Changefreq</th>
				<th bgcolor="red">Priority</th>
			</tr>
			<xsl:for-each select="url">
				<tr>
					<td bgcolor="grey"><xsl:value-of select="loc"/></td>
					<td bgcolor="red"><xsl:value-of select="lastmod"/></td>
					<td bgcolor="red"><xsl:value-of select="changefreq"/></td>
					<td bgcolor="red"><xsl:value-of select="priority"/></td>
				</tr>
				
				
			</xsl:for-each>
		</table>
	</body>
</html>
</xsl:template>
</xsl:stylesheet>