const ceramic = Item("ceramic-composite")

// Vanilla Serpulo Turrets Compatibility
const compoundBulletSpectre = extend(FlakBulletType, {
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
