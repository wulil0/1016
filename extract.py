import os
import shutil

# 当前文件夹路径
current_dir = '/Users/ll/a'

# 使用os.walk遍历目录树
for root, dirs, files in os.walk(current_dir):
    for file in files:
        # 获取文件的源路径和目标路径
        source_path = os.path.join(root, file)
        destination_path = os.path.join(current_dir, file)

        # 移动文件到当前文件夹
        shutil.move(source_path, destination_path)

# 删除所有子文件夹
for root, dirs, files in os.walk(current_dir, topdown=False):
    for dir in dirs:
        dir_path = os.path.join(root, dir)
        shutil.rmtree(dir_path)
