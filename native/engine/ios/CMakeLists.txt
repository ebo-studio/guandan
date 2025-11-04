cmake_minimum_required(VERSION 3.22)
set(CMAKE_SYSTEM_NAME iOS)
set(APP_NAME "goldenAnt" CACHE STRING "Project Name")

project(${APP_NAME} CXX)

set(CC_PROJECT_DIR ${CMAKE_CURRENT_LIST_DIR})
set(CC_UI_RESOURCES)
set(CC_PROJ_SOURCES)
set(CC_ASSET_FILES)
set(CC_COMMON_SOURCES)
set(CC_ALL_SOURCES)

# === 引入 Cocos 公共逻辑 ===
include(${CC_PROJECT_DIR}/../common/CMakeLists.txt)

# === 定义 iOS 执行目标 ===
set(EXECUTABLE_NAME ${APP_NAME}-mobile)
cc_ios_before_target(${EXECUTABLE_NAME})
add_executable(${EXECUTABLE_NAME} ${CC_ALL_SOURCES})
cc_ios_after_target(${EXECUTABLE_NAME})

# =========================================================
# 🚀 强制设置 cocos_engine 和当前工程目标的 C++17 编译标志
# =========================================================

# 定义我们需要的标准
set(CXX_STANDARD_VERSION 17)

# 获取所有目标并打印日志
get_property(ALL_TARGETS DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY BUILDSYSTEM_TARGETS)
message(STATUS "All targets found: ${ALL_TARGETS}")

# 遍历目标强制设定
foreach(tgt IN LISTS ALL_TARGETS)
    if (tgt MATCHES "cocos_engine" OR tgt MATCHES "${EXECUTABLE_NAME}")
        message(STATUS "Applying C++17 to target: ${tgt}")
        set_property(TARGET ${tgt} PROPERTY CXX_STANDARD ${CXX_STANDARD_VERSION})
        set_property(TARGET ${tgt} PROPERTY CXX_STANDARD_REQUIRED ON)
        set_property(TARGET ${tgt} PROPERTY CXX_EXTENSIONS OFF)
        target_compile_features(${tgt} PRIVATE cxx_std_${CXX_STANDARD_VERSION})

        # ✅ 关键修改：仅对 C++ 文件启用 -std=c++17
        target_compile_options(${tgt} PRIVATE
            $<$<COMPILE_LANGUAGE:CXX>:-std=c++17>
        )
    endif()
endforeach()
# =========================================================
# Force all C++ sources (engine + app) to use C++17
# =========================================================
add_compile_options($<$<COMPILE_LANGUAGE:CXX>:-std=gnu++17>)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS ON)

