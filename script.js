function downloadImage(path){

    const link = document.createElement('a');

    link.href = path;

    link.download = path.split('/').pop();

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}
