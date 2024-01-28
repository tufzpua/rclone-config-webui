//=============================================================================
//
//
//  Description:
//    Запуск конфигурирования Rclone.
//
// #rclone #sync #cloud
//=============================================================================

const { exec } = require("child_process");

//const lvPATH_Rclone = `D:\\Bin\\Rclone--v1.64.2-windows-amd64\\`;
const lvPATH_Rclone = ``;

//lfExec ( lvPATH_Rclone + `rclone.exe rcd --rc-web-gui`);
lfExec ( lvPATH_Rclone + `rclone rcd --rc-web-gui`);
 
//lfExec ( lvPATH_Rclone + `rclone.exe rcd --rc-web-gui --rc-user=admin --rc-pass=admin` );
lfExec ( lvPATH_Rclone + `rclone rcd --rc-web-gui --rc-user=admin --rc-pass=admin` );

//=============================================================================
  
function lfExec ( ppCommand ) {

    exec ( ppCommand, (error, stdout, stderr ) => {
        if ( error ) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

//[EOF]
