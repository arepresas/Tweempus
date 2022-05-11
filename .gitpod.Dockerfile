FROM gitpod/workspace-full:latest

# Update SO
RUN sudo apt update && sudo apt upgrade -y && sudo apt dist-upgrade -y && sudo apt autoremove -y

# Install Angular CLI
RUN npm install -g @angular/cli

# Install OhmyZsh
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" -y
