
$(function () {
    volume = JSON.parse(document.getElementById("volumeJSON").innerHTML);
    muted = JSON.parse(document.getElementById("mutedJSON").innerHTML);

    music = document.getElementById('bgMusic');
    music.volume = volume * VSCALER;
    click = document.getElementById('btnClk');
    click.volume = volume * VSCALER;

    if (muted === 1) {
        muted = true;
        
    }
    else if (muted === 0) {
        muted = false;
    }
    else {
        if (!muted) {
            music.play();
        }
    }
    music.muted = muted;
    click.muted = muted;

    document.getElementById("button-container").addEventListener("click", function () {
        playSound(click, muted);
    });

    // Posts team data to batttle.php via form
    document.getElementById("start-btn").addEventListener("click", function () {
        playSound(click, muted);
        let form = document.createElement("form");
        form.style.visibility = "hidden";
        form.method = "POST";
        form.action = "./select6.php";

        let ipt = document.createElement("input");
        ipt.name = "volume";
        ipt.value = JSON.stringify(volume);
        form.appendChild(ipt);
        document.body.appendChild(form);

        ipt = document.createElement("input");
        ipt.name = "muted";
        ipt.value = JSON.stringify(muted);
        form.appendChild(ipt);
        document.body.appendChild(form);

        form.submit();
    });

    document.getElementById("sound").addEventListener("click", function () {
        if (muted) {
            music.muted = false;
            click.muted = false;
            muted = false;
            music.currentTime = 0; 
            music.play();
        }
        else {
            music.muted = true;
            click.muted = true;
            muted = true;
        }
    });

    document.getElementById("up").addEventListener("click", function () {
        if (!muted) {
            volume = volume + 5;

            if (volume > MAXV) {
                window.alert("Max Volume");
            }
            else {
                music.volume = volume * VSCALER;
                click.volume = volume * VSCALER;
            }
        }
    });

    document.getElementById("down").addEventListener("click", function () {
        if (!muted) {
            volume = volume - 5;

            if (volume < MINV) {
                window.alert("Minimum Volume");
            }
            else {
                music.volume = volume * VSCALER;
                click.volume = volume * VSCALER;
            }
        }
    });
});