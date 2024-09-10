import React, { useEffect, useMemo, useState } from "react";
import {
  Modal,
  Button,
  MantineProvider,
  Box,
  TextInput,
  Group,
} from "@mantine/core";
import { BlockNoteEditor, PartialBlock, Block } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

async function saveToStorage(key: string, jsonBlocks: Block[]) {
  localStorage.setItem(key, JSON.stringify(jsonBlocks));
}

async function loadFromStorage(key: string) {
  const storageString = localStorage.getItem(key);
  return storageString
    ? (JSON.parse(storageString) as PartialBlock[])
    : undefined;
}

async function deleteFromStorage(key: string) {
  localStorage.removeItem(key);
}

export default function App() {
  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | "loading"
  >("loading");
  const [modalOpened, setModalOpened] = useState(true); // 初回レンダリング時にモーダルを開く
  const [memoList, setMemoList] = useState<string[]>(Object.keys(localStorage)); // ローカルストレージのキーを取得してメモリストを設定
  const [newMemoTitle, setNewMemoTitle] = useState(""); // 新しいメモのタイトル
  const [currentMemo, setCurrentMemo] = useState<string | null>(null); // 現在のメモのタイトル

  useEffect(() => {
    if (currentMemo) {
      loadFromStorage(currentMemo).then((content) => {
        setInitialContent(content || defaultBlock);
      });
    }
  }, [currentMemo]);

  const defaultBlock = [{ type: "paragraph", content: [] }] as PartialBlock[];

  const editor = useMemo(() => {
    if (initialContent === "loading" || initialContent === undefined) {
      return undefined;
    }
    return BlockNoteEditor.create({
      initialContent: initialContent.length > 0 ? initialContent : defaultBlock,
    });
  }, [initialContent]);

  const handleSave = () => {
    if (editor && currentMemo) {
      saveToStorage(currentMemo, editor.document); // 現在のメモタイトルで保存
    }
  };

  const handleNewMemo = () => {
    if (newMemoTitle.trim() !== "") {
      if (!memoList.includes(newMemoTitle)) {
        setMemoList([...memoList, newMemoTitle]);
        setCurrentMemo(newMemoTitle); // 新しいメモのタイトルを現在のメモとして設定
        setInitialContent(defaultBlock); // 新しいメモを作成する際、デフォルトのパラグラフブロックを設定
        setModalOpened(false);
        setNewMemoTitle("");
      } else {
        alert(
          "同じタイトルのメモが既に存在します。別のタイトルを入力してください。",
        );
      }
    } else {
      alert("メモのタイトルを入力してください。");
    }
  };

  const handleDeleteMemo = (memo: string) => {
    deleteFromStorage(memo);
    setMemoList(memoList.filter((m) => m !== memo));
    if (memo === currentMemo) {
      setCurrentMemo(null);
      setInitialContent(defaultBlock);
    }
  };

  if (editor === undefined && !modalOpened) {
    return "Loading content...";
  }

  return (
    <MantineProvider>
      <div>
        <Button onClick={() => setModalOpened(true)}>メモを選択</Button>

        <Modal
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
          title="メモの選択"
          size="lg"
          styles={{
            header: {
              backgroundColor: "white",
              padding: "10px",
              // marginBottom: "10px",
            }, // ヘッダー部分の背景を白にし、余白を追加
            body: { backgroundColor: "white", padding: "20px" }, // ボディ部分の背景を白に設定
            title: {
              margin: "0 0 0 10px",
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "left",
            }, // タイトルを左寄せにし、マージンを追加
          }}
        >
          <Box>
            <Group style={{ margin: 0 }}>
              <TextInput
                value={newMemoTitle}
                onChange={(e) => setNewMemoTitle(e.currentTarget.value)}
                placeholder="新しいメモのタイトル"
                style={{
                  marginBottom: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }} // 入力欄をわかりやすくするスタイル
              />
              <Button
                onClick={handleNewMemo}
                variant="filled"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  marginBottom: "10px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "4px",
                  marginLeft: "10px",
                }}
              >
                新しいメモを作成
              </Button>
            </Group>
            <div style={{ marginTop: "20px" }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {memoList.map((memo) => (
                  <li key={memo} style={{ marginBottom: "10px" }}>
                    <Button
                      onClick={() => {
                        setCurrentMemo(memo); // 選択したメモを現在のメモとして設定
                        setModalOpened(false);
                      }}
                      style={{
                        marginRight: "10px",
                        backgroundColor: "#6c757d",
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "14px",
                        borderRadius: "4px",
                      }}
                    >
                      {memo}
                    </Button>
                    <Button
                      onClick={() => handleDeleteMemo(memo)}
                      variant="outline"
                      color="red"
                      style={{
                        padding: "10px 20px",
                        fontSize: "14px",
                        borderRadius: "4px",
                      }}
                    >
                      削除
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </Box>
        </Modal>

        {editor && <BlockNoteView editor={editor} onChange={handleSave} />}
      </div>
    </MantineProvider>
  );
}
