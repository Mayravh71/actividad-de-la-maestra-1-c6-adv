let count = 0
player.onChat("tamaño", function (num1) {
    blocks.fill(
    AIR,
    pos(0, -2, 0),
    pos(num1, -2, num1),
    FillOperation.Replace
    )
    blocks.fill(
    SOUL_SAND,
    pos(0, -2, 0),
    pos(num1, -2, num1),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(0, -1, 0),
    pos(num1, -1, num1),
    FillOperation.Replace
    )
    count = 1
    while (count <= 5) {
        mobs.spawn(VILLAGER, pos(0, 0, 0))
        count += 1
    }
})
loops.forever(function () {
    mobs.spawn(SNOWBALL_PROJECTILE_MOB, randpos(
    pos(5, 10, 10),
    pos(50, 10, 10)
    ))
})
