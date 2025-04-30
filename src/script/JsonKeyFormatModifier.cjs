const fs = require('fs');

const filePath = './items_very rare.json'; // Remplace par le chemin exact de ton fichier
const outputFilePath = './items_very_rare.json'; // Fichier de sortie

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier:', err);
        return;
    }

    // Assure de convertir le JSON en simple texte transformant les clés sans guillemets
    const modifiedData = data.replace(/"(\w+?)":/g, '$1:'); // Supprime les guillemets autour des clés

    fs.writeFile(outputFilePath, modifiedData, 'utf8', (err) => {
        if (err) {
            console.error('Erreur lors de l\'écriture du fichier modifié:', err);
            return;
        }

        console.log('Transformation terminée ! Le fichier modifié est enregistré sous :', outputFilePath);
    });
});
