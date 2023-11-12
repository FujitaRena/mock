window.onload = function() {
// changeイベントを設定
document.getElementById('input').addEventListener("change", function() {
	const fileList = this.files ;
		// Blob URLの作成
	  const blobUrl = window.URL.createObjectURL( fileList[0] ) ;

		//srcにBlob URLを設定
    figureImage.setAttribute('src', blobUrl);
  //document.getElementById('figureImage').innerHTML = "<img src=" + blobUrl + ">";
} ) ;
}