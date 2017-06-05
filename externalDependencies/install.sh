#!/bin/bash
# ------------------------------------------------------------------
# [Author] Title
#          Description
# ------------------------------------------------------------------

SUBJECT=some-unique-id
VERSION=0.1.0
USAGE="Usage: $0 -hve args \n -e /path/to/eclipse \n -h display help"

display_usage() { 	
	echo -e "\nUsage:$0 -hve args" 
  echo -e "    -h     Display Help" 
  echo -e "    -e     /path/to/eclipse Imput path to eclipse" 
} 

# --- Option processing --------------------------------------------
if [ $# == 0 ] ; then
    display_usage
    exit 1;
fi

while getopts ":vhe" optname
  do
    case "$optname" in
      "v")
        echo "Version $VERSION"
        exit 0;
        ;;
      "h")
        display_usage
        exit 0;
        ;;
      "e")
        #echo $USAGE
        #exit 0;
        ;;
      "?")
        echo "Unknown option $OPTARG"
        exit 0;
        ;;
      ":")
        echo "No argument value for option $OPTARG"
        exit 0;
        ;;
      *)
        echo "Unknown error while processing options"
        exit 0;
        ;;
    esac
  done

shift $(($OPTIND - 1))

param1=$1

# -----------------------------------------------------------------

LOCK_FILE=/tmp/${SUBJECT}.lock

if [ -f "$LOCK_FILE" ]; then
echo "Script is already running"
exit
fi

# -----------------------------------------------------------------
trap "rm -f $LOCK_FILE" EXIT
touch $LOCK_FILE 

mvn install:install-file -Dfile=lombok.jar -DgroupId=org.projectlombok -DartifactId=lombok -Dversion=1.16.16 -Dpackaging=jar
java -jar lombok.jar install  $param1