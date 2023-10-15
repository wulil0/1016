from ftplib import FTP

ftp_host = "ftp.example.com"
ftp_port = 21

ftp_username = "your_username"
ftp_password = "your_password"

folder_path = "/path/to/remote/folder"

ftp = FTP()
ftp.connect(ftp_host, ftp_port)
ftp.login(ftp_username, ftp_password)

ftp.cwd(folder_path)

file_list = []
ftp.retrlines("LIST", file_list.append)
for line in file_list:
    filename = line.split()[-1]

    file_contents = []
    ftp.retrbinary("RETR " + filename, file_contents.append)

    print(f"文件名: {filename}")
    print("文件内容:")
    print("".join(file_contents))
    print("\n")

ftp.quit()
