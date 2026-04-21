"""
inject_content.py
=================
Réinjecte le contenu de content.json dans assets/index-CS1chrxr.js.

USAGE :
  python3 inject_content.py

FICHIERS ATTENDUS (dans le même dossier) :
  content.json              ← édite ce fichier pour changer les textes
  assets/index-CS1chrxr.js ← JS du site (modifié automatiquement)
"""

import json, re, sys, os, shutil

CONTENT_FILE = "content.json"
JS_FILE      = os.path.join("assets", "index-CS1chrxr.js")
BACKUP_FILE  = os.path.join("assets", "index-CS1chrxr.backup.js")

if not os.path.exists(CONTENT_FILE):
    print(f"❌ Fichier introuvable : {CONTENT_FILE}"); sys.exit(1)

if not os.path.exists(JS_FILE):
    print(f"❌ Fichier introuvable : {JS_FILE}"); sys.exit(1)

print("📖 Lecture de content.json...")
with open(CONTENT_FILE, "r", encoding="utf-8") as f:
    try:
        content = json.load(f)
    except json.JSONDecodeError as e:
        print(f"❌ Erreur dans content.json : {e}")
        print("   Vérifie la syntaxe JSON (virgules, guillemets...)")
        sys.exit(1)

print("📖 Lecture du JS...")
with open(JS_FILE, "r", encoding="utf-8") as f:
    js = f.read()

marker = "const qk="
idx = js.find(marker)
if idx < 0:
    print("❌ Bloc de contenu introuvable dans le JS."); sys.exit(1)

start = js.find("{", idx + len(marker))
depth, end = 0, start
for i, c in enumerate(js[start:], start):
    if c == "{": depth += 1
    elif c == "}":
        depth -= 1
        if depth == 0:
            end = i
            break

def to_js(obj):
    if isinstance(obj, dict):
        items = [f'"{k}":{to_js(v)}' for k, v in obj.items()]
        return "{" + ",".join(items) + "}"
    elif isinstance(obj, list):
        return "[" + ",".join(to_js(i) for i in obj) + "]"
    elif isinstance(obj, str):
        escaped = obj.replace("\\","\\\\").replace('"','\\"').replace("\n","\\n").replace("\r","")
        return f'"{escaped}"'
    elif isinstance(obj, bool):
        return "true" if obj else "false"
    elif obj is None:
        return "null"
    else:
        return str(obj)

print("💾 Backup du JS original...")
shutil.copy(JS_FILE, BACKUP_FILE)

new_content = to_js(content)
js_patched  = js[:start] + new_content + js[end + 1:]

print("✏️  Injection du nouveau contenu...")
with open(JS_FILE, "w", encoding="utf-8") as f:
    f.write(js_patched)

print()
print("✅ Terminé !")
print(f"   Backup : {BACKUP_FILE}")
print(f"   Mis à jour : {JS_FILE}")
print()
print("📤 Prochaine étape :")
print("   git add assets/index-CS1chrxr.js")
print('   git commit -m "Mise à jour du contenu"')
print("   git push")
