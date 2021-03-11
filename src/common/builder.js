function start() {
    return "#!/bin/bash"
}

function banner(OS,osVersion,version) {
    return `
# --------------------------------------------------------------
#	OS:      ${OS} ${osVersion}
#	Project: Devenv
#	Ver:     ${version}
#	Author:  Secunce E Infra(Legiorange)
#	Link:    https://sequncee.com
#	Repo:    https://github.com/sequncee/devenv
# --------------------------------------------------------------
`
}

/**
 * 
 * append echo "words"
 * 
 * @param {*} words
 *  
 */
function echo(words){
    const wordlist= words.split(/\r?\n/);
    const relist =[]
    for (let index = 0; index < wordlist.length; index++) {
        const element = wordlist[index];
        relist.push("echo \""+element+"\"");
    }
    return relist.join("\n")
}

module.exports = {
    start,
    banner,
    echo,
  };

// console.log(echo( banner() ))

// return start()+banner("centos","7","0.0.1")
// console.log(start()+banner("centos","7","0.0.1"))