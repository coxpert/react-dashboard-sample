
export const makeImageAnimation = () => {
    const container = document.getElementById("shirt_container");

    if(container !== null){
        let wrapper = document.getElementById("shirt_container");
        let width = wrapper.clientWidth;
        let height = wrapper.clientHeight;
        const app = new PIXI.Application({transparent:true});
        wrapper.appendChild(app.view);
        app.renderer.resize(400, 450);
        app.stage.interactive = true;

        const container = new PIXI.Container({transparent:true});
        app.stage.addChild(container);

        const flag = PIXI.Sprite.from(require('Assets/images/shirt.png'));
        container.addChild(flag);
        flag.x = 0;
        flag.y = 0;

        flag.scale.x = width/700;
        flag.scale.y = width/700;

        const displacementSprite = PIXI.Sprite.from(require('Assets/images/displacement_map_repeat.jpg'));

        // Make sure the sprite is wrapping.
        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
        displacementFilter.padding = 10;

        displacementSprite.position = flag.position;

        app.stage.addChild(displacementSprite);

        flag.filters = [displacementFilter];

        displacementFilter.scale.x = 80;
        displacementFilter.scale.y = 80;

        app.ticker.add(() => {
            // Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates.
            displacementSprite.x += 0.8;
            // Reset x to 0 when it's over width to keep values from going to very huge numbers.
            if (displacementSprite.x > displacementSprite.width) { displacementSprite.x = 0; }
        });
    }
}