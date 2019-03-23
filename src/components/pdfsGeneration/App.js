import React from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Link,Font } from '@react-pdf/renderer';

Font.register(
  'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  { family: 'Oswald' },
);
const styles = StyleSheet.create({
	name: {
		fontSize: 24,
		textTransform: 'uppercase',
		fontFamily: 'Oswald'
	},
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4'
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	}
});/*
Font.register(`/fonts/fonts/Open_Sans/OpenSans-Regular.ttf`, {
  family: 'Open Sans',
});
Font.register(`${__dirname}/fonts/fonts/Lato/Lato-Regular.ttf`, {
  family: 'Lato',
});
Font.register(`${__dirname}/fonts/fonts/Lato/Lato-Italic.ttf`, {
  family: 'Lato Italic',
});*/



// Create Document Component
const MyDocument = (props) => (
	<Document>
		<Page size="A4" >
			<Text style={styles.name}>Luke Skywalker</Text>
		</Page>

	</Document>
);

class App extends React.Component {
	state = { url: null };

	onRender = ({ blob }) => {
		this.setState({ url: URL.createObjectURL(blob) });
	};
	componentDidMount(){
		var path = require("path");
		console.log("hey");	
		console.log(`./fonts/Lato/Lato-Bold.ttf`)
		console.log(`./fonts/fonts/Lato/Lato-Bold.ttf`)
	}
	render() {
		return (
			<div>
				<PDFDownloadLink
					document={<MyDocument />}
					fileName="somename.pdf">
					{({ blob, url, loading, error }) => (
						loading ? 'Loading...' : 'Descargar!'
					)}
				</PDFDownloadLink>
			</div>
		);
	}
}

export default App;
