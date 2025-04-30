const fs = require('fs');

// Chemin du fichier JSON original
const inputFilePath = './entry.json';

// Lecture du fichier JSON d'entrée
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier JSON :', err);
    return;
  }

  try {
    // Parsing des données JSON
    const jsonData = JSON.parse(data);
    const items = jsonData.item;

    // Vérification que le champ "item" est bien un tableau
    if (!Array.isArray(items)) {
      console.error('Le fichier JSON ne contient pas un champ "item" ou le format est incorrect.');
      return;
    }

    // Création d'un objet pour regrouper les items par rareté
    const groupedItems = {};

    items.forEach((item) => {
      const rarity = item.rarity || 'unknown'; // Gestion des objets sans champ "rarity"
      if (!groupedItems[rarity]) {
        groupedItems[rarity] = [];
      }
      groupedItems[rarity].push(item);
    });

    // Écriture de chaque groupe dans un fichier JSON distinct
    Object.entries(groupedItems).forEach(([rarity, items]) => {
      const outputFilePath = `./items_${rarity}.json`;
      fs.writeFile(outputFilePath, JSON.stringify({ item: items }, null, 2), (writeErr) => {
        if (writeErr) {
          console.error(`Erreur lors de la création du fichier ${outputFilePath} :`, writeErr);
        } else {
          console.log(`Fichier généré avec succès : ${outputFilePath}`);
        }
      });
    });

  } catch (parseErr) {
    console.error('Erreur lors du parsing du fichier JSON :', parseErr);
  }
});
