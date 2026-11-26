const ceramic = Item("ceramic-composite")

// Vanilla Serpulo Turrets Compatibility
const ceramic-compositeBulletSpectre = extend(FlakBulletType, {
    speed: 4,
    lifetime: 55,
    damage: 100,
    shootEffect: Fx.shootBig,
    ammoMultiplier: 4,
    splashDamage: 27,
    splashDamageRadius: 50,
    collidesGround: true,
    fragBullet: extend(BasicBulletType, {
        speed: 2.5,
        damage: 5,
        sprite: "bullet",
        width: 10,
        height: 12,
        shrinkY: 1,
        lifetime: 20,
        backColor: Color.valueOf("c9a58f"),
        frontColor: Color.valueOf("8f665b"),
        despawnEffect: Fx.none
    })
});


const hellfireSideFlames = new Effect(12, e => {
    Draw.color(Color.valueOf("ff9b42"), Color.valueOf("ffd166"), e.fin());

    for(let side of [-1, 1]){
        let offset = Angles.trnsx(e.rotation + 90, side * 12);
        let offsetY = Angles.trnsy(e.rotation + 90, side * 12);

        for(let i = 0; i < 5; i++){
            let angle = e.rotation + Mathf.random(-15, 15);
            let length = Mathf.random(5, 18);
            let radius = Mathf.random(1, 3);

            let x = e.x + offset + Angles.trnsx(angle, length);
            let y = e.y + offsetY + Angles.trnsy(angle, length);

            Fill.circle(x, y, radius * e.fout());
        }
    }

    Draw.reset();
});
