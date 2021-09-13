function addBorder(picture) {
    // const wallOfLength = picture[0].length + 2;
    const wall = "*".repeat(picture[0].length + 2);

    // let wall = '';
    // for(let i = 0; i < wallOfLength; i++){
    //     wall = wall.concat('*');
    // }
    // picture.unshift(wall);
    // picture.push(wall);

    // picture.unshift("*".repeat(wallOfLength));
    // picture.push("*".repeat(wallOfLength));

    picture.unshift(wall);
    picture.push(wall);
    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = "*".concat(picture[i], "*");
    }
    return picture;
}

console.log(addBorder(["abc", "ded"]));
